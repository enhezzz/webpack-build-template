const webpack = require('webpack');
const CONFIG = require('./webpack.dev')
const MemoryFS = require('memory-fs');
// const webpackDevMiddleware  = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-Hot-middleware")
const devConf = require('../config/devConf.json')
const path = require('path')
const util = require('util')
// const http = require('http')
const PORT = process.env.PORT || devConf.server.port || 3000
// const server = http.createServer(middleware(compiler))
const fs = new MemoryFS();
let compiler = webpack(CONFIG);
compiler.outputFileSystem = fs;
compiler.watch({
    ignored: /node_modules/,
    aggregateTimeout: 1000,
    poll: 1000
  }, (err, stats) => {
    // Print watch/build result here...
    console.log(`c at:
    local: http://localhost:${PORT}`)
    // console.log(fs.readFileSync(path.join(__dirname, "../dist/index.html")))
    
    // console.log(stats);
  })
let express = require('express');
let app = express();
// app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
//  handle static file
app.use((req,res)=> {
    console.log(req.path)
    if(req.path == "/") {
        fs.readFile(path.join(__dirname,`../dist/index.html`),"utf8",(err,response)=> {
            if(err) throw err;
            else {
                res.send(response).end()
            }
        });
    }else {
        let pathRule = /(\/.*)\??.*/
        let filePath = req.path.replace(pathRule,(matchedStr,$1)=> {
            return $1
        })
        console.log(filePath)
        fs.readFile(path.join(__dirname,`../dist${filePath}`),"utf8",(err,response)=> {
            if(err) throw err;
            let arr = path.extname(filePath).match(/(\.jpg|\.jpeg|\.png|\.gif|\.svg)/);
            
            if(arr && arr.length != 0) {
                if(arr[0] == ".jpg" || arr[0] == ".jpeg") {
                    res.set({
                        "Content-Type": "image/jpeg"
                    })
                }else {
                    res.set({
                        "Content-Type": `image/${arr[0].slice(1)}`
                    })
                }
                console.log(response)
                res.send(response).end()
            }else res.send(response).end()
            
        });
        // res.sendFile(path.join(__dirname,`../dist${filePath}`));
        // res.end()
    }
    
  
})

// app.get('/',()=> {
//     console.log(fs.readFileSync(path.join(__dirname, "../dist/index.html"),"utf8"))
// //     fs.writeFileSync("/a/test/dir/file.txt", "Hello World");
// // console.log(fs.readFileSync("/a/test/dir/file.txt"))
//     // console.log(fs.readFileSync('/dist/index.html'))
// })
app.listen(PORT, 'localhost')
// server.listen(80,'localhost', ()=> {
//   console.log(`--------------------------------------listening ${PORT} port-----------------------------------------------------`)
// })