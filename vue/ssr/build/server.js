const webpack = require('webpack');
const CONFIG = require('./webpack.server')
webpack(CONFIG, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error(err)
    } else {
        console.log('build successfully...')
    }
});


