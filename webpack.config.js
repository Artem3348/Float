const path = require('path');

module.exports = {
    optimization: {
        minimize: false,
    },
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
    },
}