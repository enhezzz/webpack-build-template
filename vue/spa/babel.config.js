module.exports = function (api) {
    api.cache(true)
    const presets = [
            "@babel/preset-env",
    ];
    const plugins = [
        "@babel/plugin-syntax-dynamic-import"
    ];  
    // process.env.SYNTAX == "jsx"? presets.push("@vue/babel-preset-jsx"): false;
    presets.push("@vue/babel-preset-jsx")
    // process.env.SYNTAX == "jsx"? plugins.push(["react-css-modules", {
    //     "option": "value"
    //   }]): false;
    return {
        presets,
        plugins
    };
}