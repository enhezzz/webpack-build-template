const webpack = require('webpack');
const os=require('os');
const ipAddress = []
var ifaces=os.networkInterfaces();
for (var dev in ifaces) {
  ifaces[dev].forEach(function(details){
    if (details.family=='IPv4') {
        ipAddress.push(details.address)
    }
  });
}

const CONFIG = require('./webpack.dev')
const MemoryFS = require('memory-fs');
// const merge = require('webpack-merge')
// const webpackDevMiddleware  = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-Hot-middleware")
const devConf = require('../config/devConf.json')
const path = require('path')
// const util = require('util')
process.env.SYNTAX = process.argv[2] =="--jsx"? "jsx": "template";
process.env.NODE_ENV = "development"
// const http = require('http')
const PORT = process.env.PORT || devConf.server.port || 3000
// const server = http.createServer(middleware(compiler))
const fs = new MemoryFS();
let compiler = webpack(CONFIG());
compiler.outputFileSystem = fs;
compiler.watch({
    ignored: /node_modules/,
    aggregateTimeout: 1000,
    poll: 1000
  }, (err, stats) => {
    // Print watch/build result here...
    if(err) {
        console.error("you may be have some misconfiguration - -,please check out!ヽ(￣ω￣(￣ω￣〃)ゝ")
        return;
    }else if(stats.hasErrors()) {
        console.error(stats.toString());
        return;
    }else if(stats.hasWarnings()) {
        // console.warn(stats.toString());
    }
    // console.log(stats.toString());
    console.log("\x1b[32mbuild successfully!!! enjoy~\t\t\t\t\t（づ￣3￣）づ╭❤～ (●'◡'●)\x1b[0m")
    console.log(`listening at:
    \x1b[33m local: \x1b[32m http://${ipAddress[1]}:${PORT}
    \x1b[33m network: \x1b[32m http://${ipAddress[0]}:${PORT}`)
    console.log("\x1b[0m")
  })
let express = require('express');
let app = express();
// app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
//  handle static file
app.use((req,res,next)=> {
    // console.log(req.path)
    if(req.path == "/") {
        fs.readFile(path.join(__dirname,`../dist/index.html`),"utf8",(err,response)=> {
            if(err) throw err;
            else {
                res.send(response).end()
            }
        });
    }else {
        if(req.path == "/favicon.ico") {
            let faviconReadStream = fs.createReadStream(path.join(__dirname, "../public/favicon.ico"))
            faviconReadStream.pipe(res)
            return
        }
        let pathRule = /(\/.*)\??.*/
        let filePath = req.path.replace(pathRule,(matchedStr,$1)=> {
            return $1
        })
        try{
            let readStream =  fs.createReadStream(path.join(__dirname,`../dist${filePath}`));
        // res.sendFile(path.join(__dirname,`../dist${filePath}`));
        // res.end()
        // let arr = path.extname(filePath).match(/(\.jpg|\.jpeg|\.png|\.gif|\.svg)/);
        //     if(arr && arr.length != 0) {
        //             res.set({
        //                 "Content-Type": `image/${arr[0].slice(1)}`
        //             })
        //             readStream.pipe(res)
        //     }else readStream.pipe(res)
        readStream.pipe(res)
        }catch(e) {
            console.log(e)
            next()
        }
        
    }
    
  
})


ipAddress.forEach((address)=> {
    app.listen(PORT, address)
})