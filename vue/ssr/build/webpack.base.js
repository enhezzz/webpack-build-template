// const webpack = require()
const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = {
    context: path.join(__dirname, '../'),
    output: {
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
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProgressPlugin((percentage, message, ...args) => {
            // e.g. Output each progress message directly to the console:
            console.info(percentage*100, message, ...args);
        }),
    ]
}
module.exports = config