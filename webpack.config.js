//  注意：在配置文件汇总不能使用import这个ES6模块化的语法

// 配置文件..基于node
// 引入path文件
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   //入口
   entry:path.join(__dirname,'./src/js/main2.js'),
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
    // 热更新需要两步，用命令行比较好
    // hot:true   //1-热更新
   },

   //模块：用来处理非js静态资源
   module:{
        //通过rules指定处理某个类型的文件的规则
        rules:[
            // 当test能通过匹配要加载文件路径时，就通过style-loader和css-loader来处理这个文件
            //注意：use中loader的处理顺序是  从左往右的 
            {test:/\.css$/, use:['style-loader','css-loader']} ,
            // sass-loader  处理sass文件
            {test:/\.(scss|sass)$/,use:['style-loader','css-loader','sass-loader']},
            //  file-loader加载图片
            // {test:/\.(jpg|png|jpeg|gif)/,use:['file-loader']}
            

            // 使用url-loader图片会被解析成 base64 编码的格式
            // 对于小图标才是个使用 base64 编码，大图片不适合base64 
            // 我们呢需要指定一个阀值，如果图片的大小比指定的阀值小，就转化为base64
                                //  如果图片的大小比指定的阀值大，就不转化为base64
            // 格式
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
                        // options:{
                        //     //通过limit指定阀值，单位是字节（byte ）
                        //     limit:8190
                        // }
                    }
                
            },

            // 处理ES6或者更高级的JS语法
            // exclude 排除node_modules,
            // 因为node_modules中的JS文件都是es5的语法，不需要转换，所以需要排除，node_modules中的js文件有很多，加载速度慢影响性能
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},

            // 处理vue文件单个组件
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

