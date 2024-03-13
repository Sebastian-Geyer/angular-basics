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

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
