module.exports = {
    devServer: {
        port: 9000,
        proxy: {
            "/a": {
                target: "http://localhost:3666"
            },
            "/post": {
                target: "http://localhost:3666"
            }
        }
    }
}