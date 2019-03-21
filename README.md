# `mocca-front` [![CircleCI](https://circleci.com/gh/inf219-mocca/MOCCA-front.svg?style=svg)](https://circleci.com/gh/inf219-mocca/MOCCA-front)

A simple React frontend for the MOCCAPI. Currently does barely anything.

## The whats and things

This project is written in [TypeScript](https://www.typescriptlang.org/),
[React](https://reactjs.org/) and a healthy dose of ignorance. To combat this we
are using [ESLint](https://eslint.org/),
[TSLint](https://palantir.github.io/tslint/) and
[Prettier](https://prettier.io/) to lint and format our files.

## Installation

You need to be on a recent version of [Node.js](https://nodejs.org/en/),
preferably either the latest release or the latest LTS (v11 or v10 as of this
writing), then you need to have [Yarn](https://yarnpkg.com/en/) installed for
package management. To install all dependencies run `yarn install --frozen-lockfile`.

## Configuration and utilities

There is a pletora of editors and ways to run this project, I'm developing it in
[WebStorm](https://www.jetbrains.com/webstorm/) because it's what I am used to
and supports everything out of the box. Anything else and you're on your own.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode. Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the
console.

### `yarn start:mock`

The same as above, but also starts a mock server that returns the same API as
the actual Django app, useful for development so you don't have to start the
main application just to run the React app.

### `yarn test`

Launches the test runner in the interactive watch mode. See the section about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React
in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to
be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (Webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App
documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here:
https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here:
https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here:
https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here:
https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here:
https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
