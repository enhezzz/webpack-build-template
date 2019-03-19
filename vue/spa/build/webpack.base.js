// const webpack = require()
const path = require('path')
const webpack = require("webpack")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const vueJsxHotLoader = require("../config/loader/vue-jsx-hot-loader")
console.log('------------'+process.env.NODE_ENV)
const config = {
    context: path.join(__dirname, '../'),
    entry: ['./src/main.js'],
    output: {
        path: path.join(__dirname, "../dist"),
        publicPath: "/",
        chunkFilename: '[name].[chunkhash].bundle.js'
        // library,
        // libraryTarget,

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.jsx$/,
                use: [
                    'babel-loader',
                    'vue-jsx-hot-loader',
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV !== 'production'?'vue-style-loader': MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 512,
                            name: '[name].[hash:7].[ext]',
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "@": path.join(__dirname,"../src")
        },
        extensions: ['.js', '.vue', '.json', 'jsx', '.wasm']
    },
    performance: {
        hints: "warning",
        maxAssetSize: 200000, // int (in bytes),
        maxEntrypointSize: 400000, // int (in bytes)
    },
    // devtool: "cheap-module-source-map",
    target: "web",
    plugins: [
        new VueLoaderPlugin(),
        process.env.NODE_ENV !== 'production'?console.log(process.env.NODE_ENV):new webpack.ProgressPlugin(function handler(percentage, msg) {
            console.log(`\x1b[32m${(percentage.toFixed(2) * 100)}%`, '\x1b[0m==========>',`\x1b[36m \x1b[4m${msg}\x1b[0m`);
          })
    ],
}
module.exports = config