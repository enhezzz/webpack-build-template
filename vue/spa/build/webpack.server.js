const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseConf = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const production = process.env.production || true
const CONF = {
    mode: 'production',
    output: {
        filename: "[name].[chunkhash].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'production',
            template: './index.html',
            minify: production ? true : false,
            // hash: true, //  append a unique webpack compilation hash to all included scripts and CSS files, useful for cache busting
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new webpack.ProgressPlugin((percentage, message, ...args) => {
            // e.g. Output each progress message directly to the console:
            console.info(percentage*100, message, ...args);
        }),
        new CleanWebpackPlugin('dist', {
            root: path.join(__dirname, '../')
        })
    ]
}

module.exports = merge(baseConf, CONF)