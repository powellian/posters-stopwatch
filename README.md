# posters-stopwatch
Built using the [Zurb Foundation 6](http://foundation.zurb.com/sites/docs/) CLI install.

View the completed test files here: [powellian.com/deeson](http://powellian.com/deeson/)

The relevant work files are located here:

**SASS:**
`./app/assets/scss/posters`
`./app/assets/scss/stopwatch`

**HTML & Javascript:**
`./app/layouts/default.html` - find the Stopwatch script here.
`./app/pages/index.html` - markup for both Posters and the Stopwatch. Plus the tabs for the interface wrapper.

----------

###Optional local build:
Running the project locally requires dependencies. Get those with the following:
`npm install`
`bower update`

When dependencies are installed, to startup the project locally run:
`npm start`
This will spin the page up in `http://localhost:8000`

To build production-ready files run:
`npm start build`
This will compile everything into: `dist`