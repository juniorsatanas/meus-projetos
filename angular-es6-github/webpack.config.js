'use strict';

// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';


module.exports = function makeWebpackConfig () {
    var config = {};

    config.entry = isTest ? {} : {
        app: './src/app/app.js'
    };

    config.output = isTest ? {} : {
        path: __dirname + '/build',
        publicPath: isProd ? '/' : 'http://localhost:8080/',
        filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
        chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
    };

    if (isTest) {
        config.devtool = 'inline-source-map';
    } else if (isProd) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'eval-source-map';
    }

    // Initialize module
    config.module = {
        preLoaders: [],
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")

        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.css$/,
            loader: isTest ? 'null' : ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        },
        {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }
    ]
};

if (isTest) {
    config.module.preLoaders.push({
        test: /\.js$/,
        exclude: [
            /node_modules/,
            /\.spec\.js$/
        ],
        loader: 'isparta-instrumenter'
    })
}

config.postcss = [
    autoprefixer({
        browsers: ['last 2 version']
    })
];

config.plugins = [];

if (!isTest) {
    config.plugins.push(
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),

        new ExtractTextPlugin('[name].[hash].css', {disable: !isProd})
    )
}

if (isProd) {
    config.plugins.push(
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new CopyWebpackPlugin([{
            from: __dirname + '/src'
        }])
    )
}

config.devServer = {
    contentBase: './build',
    stats: 'minimal'
};

return config;
}();
