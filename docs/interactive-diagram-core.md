# Interactive Diagram Core

## Execution Lifecycle

Each interactive diagram has an execution lifecycle that is hidden away from the diagram creator. When a user navigates to a sheet with a custom diagram, the three phases begin with loading, initializing, then rendering.

1. **loading**: HTML/CSS loaded and Javascript executed (imported dependencies, top-level code)
2. **initializing**: [initialize()](https://github.com/ClearCalcs/custom-diagram-boilerplate/blob/main/src/interface.ts#L1) executed, await return/resolve.
3. **rendering**: [render(params)](https://github.com/ClearCalcs/custom-diagram-boilerplate/blob/main/src/interface.ts#L3) executed every time user changes params from sheet.

Any scripts, DOM elements or event listeners set up at the top-level of files, or inside of the `initialize` and `render` functions are maintained until the user navigates away from the sheet.

?> Invocations of `render` where async code is used should be done with caution. Multiple `render` invocations may occur in quick succession without waiting for the previous one to complete. Any DOM manipulations that occur after asynchronous code (e.g. network request) may be completed out of order.

## Developer tooling

The interactive custom diagram leverages modern developer tooling that can simplify the creation of complex diagrams with multiple files and dependencies whilst still compiling down to a html file that can be used inside of the user's browser. Much of this is enabled via the [Parcel](https://parceljs.org/) bundler. Features include:

-   Code compilation and minification
-   Asset importing e.g. images
-   Bundling dependencies
-   ESM Module Imports
-   Sass [link](https://sass-lang.com/): CSS stylesheets
-   Support for Typescript
-   Transpilation for older browser versions (i.e. last 2 years) - should not be changed
-   Test Runner with hot reloading

## Bundling

On running `npm run-script compile`, [Parcel](https://parceljs.org/) generates a html file that compiles your code along with all bundled dependencies.

Add dependency to `package.json` file in the "dependencies" section.

```
npm install
```

Test Runner will hot reload to include dependency
