const webpack = require('webpack');
const CONFIG = require('./webpack.server')
process.env.SYNTAX = process.argv[2] =="--jsx"? "jsx": "template";
process.env.NODE_ENV = "production"
console.log('++++++++++++++++++++'+process.env.NODE_ENV)
webpack(CONFIG(), (err, stats) => {
    if(err) {
        console.error("you may be have some misconfiguration - -,please check out!ヽ(￣ω￣(￣ω￣〃)ゝ")
    }else if(stats.hasErrors()) {
        console.error(stats.toString())
    }else if(stats.hasWarnings()) {
        console.warn(stats.toString())
    } else {
        console.log("\x1b[32mbuild successfully!!! put them into your custom servers~\t\t\t\t\t（づ￣3￣）づ╭❤～ (●'◡'●)\x1b[0m")
    }
});


