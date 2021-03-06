/**
 * Created by lijiahao on 16/8/9.
 */
var webpack           = require('webpack');
var commonsPlugin     = new webpack.optimize.CommonsChunkPlugin('common.js');
var path              = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//定义了一些文件夹的路径
var ROOT_PATH   = path.resolve(__dirname);
var APP_PATH    = path.resolve(ROOT_PATH, 'src/fn');
var BUILD_PATH  = path.resolve(ROOT_PATH, 'build/src/fn');
var TEM_PATH    = path.resolve(ROOT_PATH, 'template');

module.exports = {
    //插件项
    plugins: [
        commonsPlugin,
        new HtmlwebpackPlugin({
            title: 'Hello World app',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['path', 'vendors','common'],
            //要把script插入到标签里
            inject: 'body',
            hash:true
        }),
        new HtmlwebpackPlugin({
            title: 'Hello World app',
            template: path.resolve(TEM_PATH, 'mobile.html'),
            filename: 'mobile.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['path', 'vendors','common'],
            //要把script插入到标签里
            inject: 'body',
            hash:true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    //页面入口文件配置
    entry: {
        //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
        //index : './src/js/page/index.js'
        path: path.resolve(APP_PATH,'entry.js'),
        //添加要打包在vendors里面的库
        vendors: ['jquery', 'zepto'],
        common:path.resolve(BUILD_PATH,'common.js')
    },
    //入口文件输出配置
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理   //  loader的处理顺序 右到左
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            //.js 文件使用 jsx-loader 来编译处理
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        //查找module的话从这里开始查找
        root: ROOT_PATH, //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss','css'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            commonFunc : 'src/fn/common.js',//后续直接 require('AppStore') 即可
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js',
            indexCss: './style/index.css',
            zeptoAlertJs: 'src/plugin/zepto.alert.js',
            zeptoAlertCss: 'src/plugin/zepto.alert.css'
        }
    }
};