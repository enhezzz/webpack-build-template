const merge = require('webpack-merge')
const path = require('path')
const baseConf = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = function (env) {
    const CONF = {
        mode: 'production',
        output: {
            filename: "[name].[chunkhash].js",
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true // set to true if you want JS source maps
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'production',
                template: './index.html',
                minify: process.env.NODE_ENV == "production" ? true : false,
                // hash: true, //  append a unique webpack compilation hash to all included scripts and CSS files, useful for cache busting
            }),
            new CleanWebpackPlugin('dist', {
                root: path.join(__dirname, '../')
            }),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
                chunkFilename: "[id].[contenthash].css"
            })
        ]
    }
    return merge(baseConf(), CONF)
}