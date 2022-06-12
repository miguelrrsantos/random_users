
# Random Users

## Intro

This project was developed as an example of how to create a custom element in [VueJS](https://vuejs.org/) (version 2). It uses the [random users API](https://randomuser.me/api/) and displays the result in a table. After build the project, this **custom element** can be used in any HTML page.

## Implementation

It was implemented using two VueJS components: RandomUsers.vue and Grid.vue.

### RandomUsers.vue

This component has filters for gender (Male. Female or Both) and two buttons (Load Users and Reset Table).  Data is loaded using axios to make a request to the Random Users API. When the data is fetched, it is transferred to the Grid.vue component through props.

### Grid.vue
This component is responsible for displaying user data in a table.

## Project setup

### Node version

Check the node version that is used in this project by opening the `.nvmrc` file which is at the root of the project. The first version of this project used version `v14.16.0` but you must check if it's still valid or updated.

If you use ([nvm](https://github.com/nvm-sh/nvm)) to manage your installed node versions and work on Linux or Mac Os computers, you can simply run the following command in order to start using the node version specified in `.nvmrc` file:

```
> nvm use
```

If you are using Windows, you have to install the target version (if not present), switch to that version and run it manually.


### Install packages

After cloning the project, you must install the `npm modules` that are defined in `package.json` file, running the following command:

```
> npm install
```

## Project run

### Commands

The `package.json` file implements commands to run the code under the key `"scripts"`:

-   "serve" (run project with default  settings)

To run the project, execute  the following command:

```
> npm run dev
```
## Project build

### Commands

The `package.json` file implements commands to build the code under the key `"scripts"`:

-   "build-ce" (build project with default  settings)

To build the project, execute  the following command:

```
> npm run build-ce
```
## Example
The folder `` example`` has the custom component already compiled and ready to test.

## Using Custom Element
The custom element produced can be introduced in HTML pages as follows:

-   include `<script src = "./ random-users.js"></script>` in the HTML header
-   include custom element `<random-users></random-users>` in the HTML body

### Props

By default, the grid data is loaded after a 2-second waiting period. However, <random-users> custom element accepts a prop to customize the waiting time for obtaining data from random users api.

The existing props are:
| PROP NAME | TYPE | EXAMPLE | MEANING
|--|--|--|--|
| wait | Number | 2000 | Time to wait in milliseconds

#### Examples

1. No prop, wait has default value of 2000 (2 seconds)
   `<random-users></random-users>`

2. wait has value of 5000 (5 seconds)
   `<random-users wait="5000"></random-users>`

## Dependencies

- [axios](https://ghub.io/axios): Promise based HTTP client for the browser and node.js
- [core-js](https://ghub.io/core-js): Standard library
- [vue](https://ghub.io/vue): Reactive, component-oriented view layer for modern web interfaces.

## Dev Dependencies


- [@vue/cli-plugin-babel](https://ghub.io/@vue/cli-plugin-babel): babel plugin for vue-cli
- [@vue/cli-plugin-eslint](https://ghub.io/@vue/cli-plugin-eslint): eslint plugin for vue-cli
- [@vue/cli-service](https://ghub.io/@vue/cli-service): local service for vue-cli projects
- [babel-eslint](https://ghub.io/babel-eslint): Custom parser for ESLint
- [eslint](https://ghub.io/eslint): An AST-based pattern checker for JavaScript.
- [eslint-plugin-vue](https://ghub.io/eslint-plugin-vue): Official ESLint plugin for Vue.js
