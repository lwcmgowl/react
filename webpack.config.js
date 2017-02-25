/**
 * Created by admin on 2017/2/24.
 */
var webpack = require('webpack');//引入Webpack模块供我们调用，这里只能使用ES5语法，使用ES6语法会报错
module.exports={
    devtool:'eval-source-map',
    entry:['webpack/hot/dev-server',__dirname+'/app/main.js'],
    output:{
        path:__dirname+'/build',
        filename:'bundle.js',
        publicPath: '/build'
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],


}