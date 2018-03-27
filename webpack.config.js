//  注意：在配置文件汇总不能使用import这个ES6模块化的语法

// 配置文件..基于node
// 引入path文件
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   //入口
   entry:path.join(__dirname,'./src/main.js'),
   //出口
   output:{
    //代码分离：分为两个   
        //通过path指定文件的输出路劲
        path:path.join(__dirname,'./dist'),
        // 指定输出文件的名称
        filename:'bundle.js'
   },
   //用来配置 webpack-dev-server
   devServer:{
    open:true,  //自动打开浏览器
    contentBase:path.join(__dirname,'./src'),  //指定打开哪个目录中的index
    port:3009,  //指定端口号
   },

   //模块：用来处理非js静态资源
   module:{
        rules:[
            {test:/\.css$/, use:['style-loader','css-loader']} ,
            // sass-loader  处理sass文件
            {test:/\.(scss|sass)$/,use:['style-loader','css-loader','sass-loader']},
            {
                test:/\.(jpg|png|jpeg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            //通过limit指定阀值，单位是字节（byte ）
                            limit:8190
                        }
                    }
                ]
            },
            // 字体图标的处理
            {
                test:/\.(eot|svg|ttf|woff|woff2|otf)$/,
                use:
                    {
                        loader:'url-loader',
                        options:{
                            //通过limit指定阀值，单位是字节（byte ）
                            limit:8190
                        }
                    }
                
            },
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
   },

   //插件
   plugins:[
    //    启动这个插件
    new webpack.HotModuleReplacementPlugin(),

    // 启动html-webpack-plugin
    // 作用  1-自动引入css ，js等文件
            //2-能够根据模板在内存生成一个页面，启动插件完成，在浏览器中看到的页面就是模板在内存中生成的一个页面
    new htmlWebpackPlugin({
        template:path.join(__dirname,'./src/index.html')
    })
   ]
}

