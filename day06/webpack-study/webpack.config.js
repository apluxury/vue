
//导入包
const HtmlWebpackPlugin = require("html-webpack-plugin");
//创建对象
const htmlPlugin = new HtmlWebpackPlugin({
    //设置生成预览页面的模板文件
    template: "./src/index.html",
    //设置生成的预览页面名称
    filename: "index.html"
})
module.exports = {
    mode: "development",//可以设置为development(开发模式)，production(发布模式)
    plugins: [htmlPlugin],
    module: {
        rules: [
            {
                //test设置需要匹配的文件类型，支持正则
                test: /\.css$/,
                //use表示该文件类型需要调用的loader
                use: ['style-loader', 'css-loader', 'postcss-loader'],


            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // }
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                //limit用来设置字节数，只有小于limit值的图片，才会转换
                //为base64图片
                use: "url-loader?limit=16940"
            }

        ]
    }
}