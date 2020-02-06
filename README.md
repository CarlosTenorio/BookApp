# Book App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server with Docker

Dependencies:
    - Docker
    - Docker Compose
Make sure that docker is running on your machine.
Run `docker-compose build frontend`
Run `docker-compose run --rm --service-ports frontend`. Then, you will be inside the container.
Run `ng run docker` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploy

Run `npm run deploy` to build the project. The build artifacts will be stored in the `dist/` directory with the prod flag.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run  e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
