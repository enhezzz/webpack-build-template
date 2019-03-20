const merge = require('webpack-merge')
const baseConf = require('./webpack.base')
const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devConf = require('../config/devConf.json')
// console.log(merge(baseConf, CONF))
module.exports = function(env) {
    const CONF = {
        mode: "development",
        entry: {
            main: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/main.js']
        },
        output: {
            filename: "[name].[hash].js"
        },
        // devServer: {
        //     proxy: devConf.server.proxy,
        //     compress: true, // enable gzip compression
        //     historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        //     hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        //     https: false, // true for self-signed, object for cert authority
        //     noInfo: true, // only errors & warns on hot reload,
        // },
        devtool: "cheap-module-eval-source-map",
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                title: 'dev',
                template: './index.html',
                minify: process.env.NODE_ENV === 'production' ? true : false,
                // hash: true, //  append a unique webpack compilation hash to all included scripts and CSS files, useful for cache busting
            })
        ]
    }
    return merge(baseConf(), CONF);
}
