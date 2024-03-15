# angular-basics
my journey to learn angular

## Setup
used Tools with versions used in this journey
- nodejs v20.11.1 with npm 10.2.4
- angular cli 17.2.3 (npm install -g @angular/cli) ([Angular CLI](https://angular.io/cli))
- vs code

## Project start
Creating a new project with `ng new <project-name`. After that we get asked which stylesheet format we would like to use. For now we will use basic CSS. Other options include additonally processed CSS variants like SCSS. After that we decide whether to use `Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)` or not. We want to use SSR for faster initial lode times.

## First start

We run `ng serve` for the dev server running on `http://localhost:4200/`. Any changes in source files will result in a reload. We can now see a basic Angular greetings page in our browser. The source files for this page are generated in the projet creation and are located in `src\app\app.component.html`.

## Components (and Modules)
Components are the basic building blocks of Angular apps. Older Angular applications are built with Modules bundeling Components together. This is not the preferred approach anymore and we will use so calles Standalone Components in this project. Nevertheless it is usefull to know about modules for projects using them or to understand the concepts which are still used in standalone components ([Angular Modules](https://angular.io/guide/architecture-modules)).

## First new Page
We generate a new page in our pages directory `src\app\pages` using `ng generate component <page-name>`. This new component consists of 4 files:
- `src\app\pages\first-page\first-page.component.css` - css file for additional style information only used in the component
- `src\app\pages\first-page\first-page.component.html` - html file for the structure of this page
- `src\app\pages\first-page\first-page.component.spec.ts` - specification for tests
- `src\app\pages\first-page\first-page.component.ts` - typescript file for logic programming for this component

To make the new page accessable we need to introduce a route to it. Therefore we enter the Object 
`
{
    path: 'first',
    component: FirstPageComponent
}
`
to the list of routes in `src\app\app.routes.ts` and import the typescript file accordingly. After that we can navigate to the new page via the address line of the browser. The content will be shown below the welcome page as on angular a component is technicaly not a whole page and rather a part of it or a view which gets shown in the routing-outlet of the parrent component. For us this outlet defined in the app's base component `src\app\app.component.html` as `
<router-outlet>
</router-outlet>
`. The content will be shown between these tags.

## First Content and Bindings

After creating our first page, we can start adding content to it. For that we will add a input field and a button to save some text to the page. We will display this text in different ways. We will use `src\app\pages\first-page\` for this again. First we add our building blocks to the `.html` file.
```
<form>
    <label for="textInput">Text: </label>
    <input id="textInput" type="text" [formControl]="formControl" />
</form>
<button type="button" (click)="onClick()">Click me!</button>
<span>{{ savedText }}</span>
```
There is a form with one text input, a button and a span displaying the text. Now we will bind the buildung blocks to logic in the `.ts` file.
```
  public savedText: string = "Starting Text";
  public formControl: FormControl = new FormControl();

  public onClick(): void {
    this.savedText = this.formControl.getRawValue();
  }
```
`SavedText` is our string variable, which gets displayed on the page. This binding is done by wrapping the the typscript variable in curly brackets like `{{ savedText }}`. When binding to en attribute of a tag the attribute the tag in enclosed by square brackets and the typescript variable as a value like `[formControl]="formControl"`. The third binding we use here, is the event binding when connecting our function to the button by enclosing the event with brackets like `(click)="onClick()"`. You can read an overview over all binding in angular in [Angular Bindings](https://angular.io/guide/binding-syntax).

To use the binding to the form, we need some import from the angular framework. In addition to the typescript import, we need to import all used Angular Modules in the metadata of the component.
```
import { ReactiveFormsModule, FormControl   } from '@angular/forms';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
```
## Using a frontend library

When developing a frontend application it is often advisable to use a frontend library to get more components and preconfigured styles. When working in an larger project the styles will probably be defined by seperate design experts. In this project we will use [Prime NG](https://primeng.org/).
For this we will install their package with `npm install primeng` and include their style defintitions in the 'angular.json' like:
```
            "styles": [
              "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
              "node_modules/primeng/resources/primeng.min.css",
              "src/styles.css"
            ],
```
We can choose between multiple built-in [Themes](https://primeng.org/theming#builtinthemes).

To see the newly introduced styles in action, we will create another page to input text. Component suites like prime ng often have good documentation on how to use their components. For our sample page we will use a [Button](https://primeng.org/button) and an [InputText](https://primeng.org/inputtext).

```
<p-button label="textInput" (onClick)="onClick()"></p-button>
<input type="text" pInputText [(ngModel)]="textInputValue" />
<span>{{ savedText }}</span>
```
When using these components in the html, we can see the `p` in `p-button` and `pInputText` indicating the prime component. Overall the implementation in the `html` and `typescript` is similar and maybe easier to read with the prime components. The big benefit is, that we can instantly see the styles used in our page.

On problem we might encounter, is that we still need the import for the `FormsModule` to use the binding in the InputText component. The error message for this `X [ERROR] NG8002: Can't bind to 'ngModel' since it isn't a known property of 'input'. [plugin angular-compiler]` gives a hint for this.

## Frontpage with Navigation

In this chapter we will implement a frontpage with navigation, so we can access all other chapters easily. 

We needed to add two more dependencies to our project:
- [primeflex](https://primeflex.org/) for flexible style presets
- [prime icons](https://primeng.org/icons) for a set of usable icons

These have to be installed with npm and added to the `angular.json`. Adding these in a the base style deifinition `src\styles.css` is possible, too.
```
npm install primeflex
npm install primeicons
```
```
            "styles": [
              "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
              "node_modules/primeng/resources/primeng.min.css",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeflex/primeflex.css",
              "src/styles.css"
            ],
```