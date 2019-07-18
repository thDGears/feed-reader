# Udacity Front End Track: Project 4 "Feed Reader Testing"

This is the fourth project of the **Udacity Front End Nanodegree Program**.

## Description

In this project we used Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.
We've also add some optimizations to our code using Gulp.

## How to run

You can visit the live version directly: [Feed Reader](https://thdgears.github.io/arcade-game/) OR "clone/download" the source files to your computer, then open the "index.html" file in the browser.

**NOTE:** this project has also a distribution version you can find it in the "dist" folder. We used Jasmine for unit testing, and the test results are in the bottom of the web page "index.html". However, in the distribution version "index.html", i removed the Jasmine part from the "index.html".

## How to edit

After you've cloned/downloaded the project files to your computer, open the "feedreader.js" file following this path: jasmine > spec > feedreader.js

You will find eight specs, you can edit or add more tests. The test results apear at the bottom of the web page "index.html".

## Dependencies
  * [Node.js](https://nodejs.org/en/)
  * [Jasmine](https://jasmine.github.io/index.html)
  * [Gulp](https://www.npmjs.com/package/gulp)
  ### Live Editing
  * [Browsersync](https://www.npmjs.com/package/browser-sync)
  ### CSS Optimizations
  * [gulp-sass](https://www.npmjs.com/package/gulp-sass)
  * [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
  ### Javascript Optimizations
  * [gulp-concat](https://www.npmjs.com/package/gulp-concat)
  * [gulp-terser](https://www.npmjs.com/package/gulp-terser)
  * [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)

I didn't use "gulp-babel" and "gulp-eslint", because they are producing too much errors. But i will try to fix them in the future.

## Using Gulp

**I'm using WINDOWS OS in my machine.**

In the project's root directory, there's a "gulpfile.js" file. Open it in your text editor. This is where we control our gulp plugins.

There are five tasks: default, dist, copyHtml, scripts and styles.

**Default:** watches & updates any changes made to the files automatically. It also opens the default browser for live editing.
**Dist:** produce the distribution version of the app and puts all the files in the "dist" folder.
**CopyHtml:** it just copies the "index.html" file to the dist folder.
**Scripts:** optimizes the JavaScript code by adding sourcemaps, concatination, minifying the file size.
**Styles:** Compiles (Transpile) the SCSS code into CSS and adds vendor prefixes.

In order to run any task, just open up the command prompt or terminal and type in:
`gulp` to run the default task.
`gulp name_of_the_task` to run any other task. eg: `gulp styles`

### Exporting the distribution version

To export the distribution version of the app, just type in the terminal `gulp dist`.

You should also remove the Jasmine part from "index.html" file. And this is how to do that:
1. Open the "index.html" file in your text editor.
2. Remove these three scripts tags located in the bottom of `<head>` section.
  * `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.min.js"></script>`
  * `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine-html.min.js"></script>`
  * `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/boot.min.js"></script>`
3. Finally, remove this script located in the bottom of the `body` section.
  * `<script src="jasmine/spec/feedreader.js"></script>`

## Contributing

This repository is only for demonstration purposes, so right now, i don't accept pull requests. However, you are free to clone/download the source code, make changes, republish...etc
You are not required to give any attribution, but if you do so that would be nice!

## Sources

* [W3Schools](https://www.w3schools.com/)
* [Stack Overflow](https://stackoverflow.com)
* [Github](https://github.com/)
* [MDN Web Docs](https://developer.mozilla.org/)
* [Youtube](https://www.youtube.com)
* [Dillinger](https://dillinger.io/)
* [Tutorials Point](https://www.tutorialspoint.com/)
* [CSS 2 SASS/SCSS](http://css2sass.herokuapp.com/)
* [Feed Reader Testing project by Roger Woodroofe](https://github.com/rogyw/ufend-p9-feed-reader-testing)
* [Feed Reader Testing resources by Crystal Yungwirth](https://github.com/crystal-dawn/udacity-fend-feed-reader-testing-resources)
