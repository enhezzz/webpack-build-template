const webpack = require('webpack');
const CONFIG = require('./webpack.dev')
const webpackDevMiddleware  = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-Hot-middleware")
const devConf = require('../config/devConf.json')
// const http = require('http')
const PORT = process.env.PORT || devConf.server.port || 3000
// const server = http.createServer(middleware(compiler))
let compiler = webpack(CONFIG);
let express = require('express');
let app = express();
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler))
app.listen(PORT, 'localhost', () => console.log(`--------------------------------------listening ${PORT} port-----------------------------------------------------`))
// server.listen(80,'localhost', ()=> {
//   console.log(`--------------------------------------listening ${PORT} port-----------------------------------------------------`)
// })
