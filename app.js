const express = require('express');
const path = require('path');
const index = require('./apis/index');
const app = express();
const devMiddleWare=require("webpack-dev-middleware");
const hotMiddleWare=require("webpack-hot-middleware");
const webpack=require("webpack");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const webpackConfig=require("./config/webpack.config");
const config=require('./config/config');
const compiler=webpack(webpackConfig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('.html',require('ejs').__express);//用engine方法注册模板引擎后缀名
app.use(require('connect-history-api-fallback')({index:config.basename}));
app.use(devMiddleWare(compiler,{
	stats:{colors:true},
	publicPath:webpackConfig.output.publicPath
}));
app.use(hotMiddleWare(compiler));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use('/', index);
app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;
