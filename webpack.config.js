const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: "/"
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        })
    ],
};