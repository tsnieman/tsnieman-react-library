# SCRATCH NOTES

- Tech:
	- create-react-app
	- storybook
- Guides:
	- https://medium.com/@chimera.zen/how-to-use-create-react-app-to-publish-an-npm-package-3f29909a36db

----

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run storybook`

Runs storybook.
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

### `npm run build:prepublish`

Builds the components from `./src/components/` to `./dist/`.

> Tip: make sure all components are exported from `./src/components/index.js`

> Tip: make sure you update `./package.json`'s version.

> Tip: after `build:prepublish`, just use `npm publish` to push the new release.
