const merge = require('webpack-merge')
const path = require('path')
const baseConf = require('./webpack.base')
// const webpack = require('webpack');
// const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const devConf = require('../config/devConf.json')
const production = process.env.production || false
const CONF = {
    // mode: "development",
    entry: {
        main: ['./src/entry-client.js']
    },
    output: {
        filename: "[name].[hash].js",
        // publicPath: "/client",
        path: path.join(__dirname, "../server/client"),
    },
    // devServer: {
    //     proxy: devConf.server.proxy,
    //     compress: true, // enable gzip compression
    //     historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    //     hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    //     https: false, // true for self-signed, object for cert authority
    //     noInfo: true, // only errors & warns on hot reload,
    // },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'dev',
            // filename: path.join(__dirname, '../index.html'),
            template: './index.html',
            minify: production ? true : false,
            // hash: true, //  append a unique webpack compilation hash to all included scripts and CSS files, useful for cache busting
        }),
        new CleanWebpackPlugin('server/client', {
            root: path.join(__dirname, '../')
        })
    ],
    target: "web",
}
// console.log(merge(baseConf, CONF))
module.exports = merge(baseConf, CONF)