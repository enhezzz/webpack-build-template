module.exports = function (api) {
    api.cache(true)
    const presets = [
            "@babel/preset-env",
    ];
    const plugins = [
        "@babel/plugin-syntax-dynamic-import"
    ];  
    process.env.SYNTAX == "jsx"? presets.push("@vue/babel-preset-jsx"): null;
    return {
        presets,
        plugins
    };
}