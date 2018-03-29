const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口
  entry: path.join(__dirname, './src/main.js'),

  // 出口
  output: {
    // 输出文件目录
    path: path.join(__dirname, './dist'),
    // 输出文件名称
    filename: 'bundle.js'
  },
  // 有利于开发期间定位错误信息
  devtool: 'eval-source-map',
  // webpack-dev-server
  devServer: {
    // 自动打开浏览器
    open: true,
    // 端口号
    port: 3009,
  },

  // 用来处理非JS的静态资源
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { 
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // limit 就是阀值，值的单位：字节(byte)
            limit: 8192
          }
        } 
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            // limit 就是阀值，值的单位：字节(byte)
            limit: 8192
          }
        }
      },

      // 处理ES6或者更高级的JS语法：
      // exclude后的值，表示babel不解析的文件，因为babel默认开启严格模式（strict moduel）,
      // mui 中的语法不遵循严格模式的规范，所以需要设置babel忽略加载
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules|lib/ },

      // 处理 Vue单文件组件
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    })
  ]
}
