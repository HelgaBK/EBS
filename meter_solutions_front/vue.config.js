// vue.config.js


const {NormalModuleReplacementPlugin} = require("webpack");
module.exports = {
    devServer: {
        proxy: 'https://meter-solutions.herokuapp.com/api/',
    },
    configureWebpack: {
        plugins: [
            new NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/en')
        ]
    }
}