const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/AngularElement/runtime.js',
        './dist/AngularElement/polyfills.js',
        './dist/AngularElement/scripts.js',
        './dist/AngularElement/main.js',
    ]

    await fs.ensureDir('elements');

    await concat(files, 'elements/jsa-counter.js');

    await fs.copyFile('./dist/AngularElement/styles.css', 'elements/styles.css');

})()