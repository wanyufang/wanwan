let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口 :你想打包构建的源文件路径 - 相对路径
    entry: './src/app.js',
    // 输出 :指定将源文件打包构建放置到哪个文件夹的那个文件名称
    output: {
        // 指定文件目录
        path: path.join(__dirname, 'dist'),
        // 指定文件名称
        filename: 'bundle.js'
    },
    // 配置dev-server
    // devServer: {
    //     // 设置你的托管资源的存放目录 同时这个目录提供外部的访问 默认会生成一个main.js文件
    //     publicPath: '/dist'
    // },
    // 这个模块专门用于加载loader
    module: {
        // 加载规则:什么类型的文件你要是用什么样的loader进行解析处理
        rules: [
            {
                // 添加对css的支持
                // 正则表达式: 意味着后期
                test: /\.css$/i,
                // css-loader: 将css模块处理解析为浏览器可以识别的css代码
                // style-loader: 将解析过后的css代码添加到页面中
                // 加载loader是从右到左的
                use: ['style-loader', 'css-loader']
            },
            // 添加对less的支持
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            },
            // 添加对图片和图标的支持
            {
                // png|jpg|gif:常见的图片资源
                // eot|svg|ttf|woff:字体图标或web字体的字体源文件
                test: /\.(png|jpg|gif|eot|svg|ttf|woff)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // limit表示如果图片大于50000byte，就以路径形式展示，小于的话就用base64格式展示
                        limit: 5000
                    }
                }]
            },
            // webpack-babel
            //  可以将ES6转换为ES5，以便让浏览器能够支持我们所创建的代码,一些低版本的浏览器不支持

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 指定模板源文件
            template: 'wan.html',
            // 将模板文件打包构建为目标文件
            filename: 'index.html',
            // 指定js文件的插入位置
            inject: 'head'
        })
    ]

}
