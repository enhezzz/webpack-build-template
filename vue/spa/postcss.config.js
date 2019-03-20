module.exports = {
    plugins: [
        process.env.SYNTAX === "jsx"? require("postcss-modules"): false
    ]
  }