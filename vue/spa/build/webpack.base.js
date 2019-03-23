// const webpack = require()
const path = require('path')
const webpack = require("webpack")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const ProgressBar = require('progress');
// const vueJsxHotLoader = require("../config/loader/vue-jsx-hot-loader")
const log = require('single-line-log').stdout;
// let progressIndicatorIndex = 0;

module.exports = function(env) {
    // const bar = new ProgressBar('  compiling... [:bar] :rate/bps :percent :etas', {
    //     complete: '=',
    //     incomplete: ' ',
    //     width: 20,
    //     total: 100
    //   });
    // let preTick = 0,currentTick = 0;
    let statusInfo = "compiling..."
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
                        'babel-loader',
                        'eslint-loader'
                    ],
                    exclude: [/node_modules/]
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
                        {
                            loader: "css-loader",
                            // options: {
                            //   importLoaders: 1,
                            //   modules: true,
                            //   localIdentName: "[name]_[local]_[hash:base64:5]"  // 为了生成类名不是纯随机
                            // },
                          },
                        // process.env.SYNTAX === "jsx"? "postcss-loader": null
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                      'vue-style-loader',
                      'css-loader',
                      'sass-loader'
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
            new webpack.ProgressPlugin(function handler(percentage, msg) {
                // progressIndicatorIndex++;
                // let progressIndicator = (new Array(progressIndicatorIndex)).fill(undefined).map(i=> "=").join("")+">"
                // console.log(`\x1b[32m${(Math.round(percentage.toFixed(2) * 100))}%`, `\x1b[0m${progressIndicator}`,`\x1b[36m \x1b[4m${msg}\x1b[0m`);
                // console.log(Math.round(percentage.toFixed(2) * 100))
                // console.log((Math.round(percentage.toFixed(2) * 100)))
                // currentTick = (Math.round(percentage.toFixed(2) * 100))
                // console.log((Math.round(percentage.toFixed(2) * 100)),currentTick,preTick,currentTick - preTick)

                // bar.update(Math.round(percentage.toFixed(2) * 100));
                // preTick = currentTick
                // console.log(Math.round(percentage.toFixed(2) * 100))
                // log.clear()
                if(Math.round(percentage.toFixed(2) * 100) == 100) statusInfo = "finish^_^"
                let progressIndicator = (new Array(Math.round(percentage.toFixed(2) * 100))).fill(undefined).map(i=> "=").join("")+">"
                a = log(`\x1b[42m${statusInfo}\x1b[0m\n${progressIndicator}[ ${Math.round(percentage.toFixed(2) * 100)}% ]${msg}\n`);
              })
        ],
    }
    return config
}