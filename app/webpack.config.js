const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    entry: path.resolve(`${__dirname}/src/`),
    output: {
        path: path.resolve(`${__dirname}/dist/`),
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        host: "0.0.0.0",
        port: 8080,
        hot: true,
        historyApiFallback: true,
        watchOptions: {
            poll: 1000
        }
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: "babel-loader" },
            { test: /\.(png|ico)(\?.*)?$/, use: "url-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};
