const webpack = require('webpack');
const CONFIG = require('./webpack.client')
// const webpackDevMiddleware  = require('webpack-dev-middleware');
// const webpackHotMiddleware = require("webpack-Hot-middleware")
const devConf = require('../config/devConf.json')
const fs = require('fs')
const path = require('path')
// const http = require('http')
const PORT = process.env.PORT || devConf.server.port || 3000
// const server = http.createServer(middleware(compiler))
let compiler = webpack(CONFIG, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error(err)
    } else {
        fs.rename(path.join(__dirname, '../server/client/index.html'), path.join(__dirname, '../server//index.html'), (err) => {
            if (err) throw err;
            console.log('build successfully...')
        });

    }
});
// let express = require('express');
// let app = express();
// app.use(webpackDevMiddleware(compiler));
// app.use(webpackHotMiddleware(compiler))
// app.listen(PORT, 'localhost', () => console.log(`--------------------------------------listening ${PORT} port-----------------------------------------------------`))
// server.listen(80,'localhost', ()=> {
//   console.log(`--------------------------------------listening ${PORT} port-----------------------------------------------------`)
// })
