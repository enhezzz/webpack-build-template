const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseConf = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const CONF = {
    mode: 'production',
    output: {
        filename: "[name].[chunkhash].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'production',
            template: './index.html',
            minify: process.env.NODE_ENV ? true : false,
            // hash: true, //  append a unique webpack compilation hash to all included scripts and CSS files, useful for cache busting
        }),
        new CleanWebpackPlugin('dist', {
            root: path.join(__dirname, '../')
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css'
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
}
console.log('*******'+process.env.NODE_ENV)
module.exports = merge(baseConf, CONF)