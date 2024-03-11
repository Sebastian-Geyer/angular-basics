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
