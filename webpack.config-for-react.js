

let builder = require("plugin-master-js-build")


let data = [
    {
        source: 'resources/js/react/app.js',
        outputDir: 'assets/js',  // targeted output directory name
        outputFileName: 'app'  // can be with .js extension
    }
];


module.exports = builder.react(data);
