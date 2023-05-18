# Global Styles

We have created some scripts that generates stylesheet variables automatically based on stylesheets constants located in [stylesheets/constants directory](../../stylesheets/constants/).

These script are located inside of [scripts/stylesheets directory](../../scripts/stylesheets/), they generate all the styles that we need and put it inside of [public/stylesheets/theme/\*.min.css](../../public/stylesheets/theme/) files

The generated styles then come together in [public/stylesheets/theme/index.css](../../public/stylesheets/theme/index.css) file and we import it in [index.css](../../index.css) file to use it globally in our app.

We have a single [`stylesheets` script in package.json](../../package.json#28) that runs all these scripts sequentially.

Make sure you run it with global node version upper than _14.14.0_, since `rm` method was added to `fs` in this version based on [documentation](https://nodejs.org/api/fs.html).
