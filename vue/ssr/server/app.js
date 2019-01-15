const express = require('express')
let app = express()
// const createApp = require('../src/entry-server')
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('./server-bundle/vue-ssr-server-bundle.json')
const fs = require('fs')
const path = require('path')

const PORT = process.env.PORT || 80

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template: fs.readFileSync(path.join(__dirname, './index.html'), 'utf-8'),
    // clientManifest // （可选）客户端构建 manifest
})
app.use(express.static(path.join(__dirname, './client')))
app.get('*', (req, res) => {
    const context = { url: req.url }
    console.log(context)

    renderer.renderToString(context, (err, html) => {
        if (err) {
            if (err.code === 404) {
                res.status(404).end('Page not found')
            } else {
                res.status(500).end('Internal Server Error')
            }
        } else {
            console.log(html)
            res.end(html)
        }
    })

})

app.listen(PORT, 'localhost', ()=> {
    console.log(`listening ${PORT} port...`)
})