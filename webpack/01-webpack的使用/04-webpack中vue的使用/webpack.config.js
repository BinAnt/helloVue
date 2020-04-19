//导入node库的path模块
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
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
    entry: './src/js/main.js',
    output: {
        /**
         * path.resolve() 可以拼接两个路径，使这个地方的path永远都是动态的路径
         */
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            },
            {
              test: /\.less$/,
              use: [{
                  loader: "style-loader" // creates style nodes from JS strings
              }, {
                  loader: "css-loader" // translates CSS into CommonJS
              }, {
                  loader: "less-loader" // compiles Less to CSS
              }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        // 当加载的图片，小于limit时，会将图片编译成base64字符串形式，
                        // 当加载的图片，大于limit时，需要使用file-loader模块进行加载
                      limit: 8192,
                      name: 'img/[name].[hash:8].[ext]'
                    }
                  }
                ]
            },
            {
                test: /\.js$/,
                //exclude: 排除
                // include: 包括
                //下面这两个文件不包含在内
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    // presets: ['@babel/preset-env']
                    presets: ['es2015']
                  }
                }
            },
            {
              test: /\.vue$/,
              use: ['vue-loader']
            }
          ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
      }
    },
    plugins: [
      new VueLoaderPlugin()
    ]
}