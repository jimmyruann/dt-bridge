// Helper for combining webpack config objects
const { merge } = require('webpack-merge');
const path = require("path")

module.exports = (config, context) => {
    return merge(config, {
        entry: {
            background: path.join(__dirname, "ext-src/background.ts"),
            inject: path.join(__dirname, "ext-src/inject.ts"),
        },
        output: {
            filename: "[name].js",
        },
        optimization: {
            runtimeChunk: false
        }
    });
};