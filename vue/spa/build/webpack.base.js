// const webpack = require()
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
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
        new VueLoaderPlugin()
    ]
}
module.exports = config