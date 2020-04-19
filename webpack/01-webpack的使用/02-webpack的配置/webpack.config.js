//导入node库的path模块
const path = require('path');

/**
 * webpack的核心配置部分：
 * 1、入口(entry)
 * 2、输出(output)
 *     path:需要绝对路径
 * 3、loader
 *  npm安装需要使用的loader
 *  webpack.config.js 中的module中配置   
 * 4、插件(plugins)
 */
module.exports = {
    entry: './src/main.js',
    output: {
        /**
         * path.resolve() 可以拼接两个路径，使这个地方的path永远都是动态的路径
         */
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}