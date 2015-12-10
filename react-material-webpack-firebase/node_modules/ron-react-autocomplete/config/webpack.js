/*!
 * Facebook React Starter Kit | https://github.com/kriasoft/react-starter-kit
 * Copyright (c) KriaSoft, LLC. All rights reserved. See LICENSE.txt
 */

/*
 * Webpack configuration. For more information visit
 * http://webpack.github.io/docs/configuration
 */

'use strict';

var webpack = require('webpack');

module.exports = function (release) {
  return {


    cache: !release,
    debug: !release,
    devtool: false,
    entry: {
      reactAutoComplete : './src/index.js',
    },
    output: {
      path: './lib/',
      filename: '[name].js',
      publicPatch: './lib/',
      // export itself to UMD Module
      libraryTarget: "umd",
      // name of the global var: "ReactAutocomplete"
      library: "ReactAutocomplete"
    },
    externals: {
      "react": {
        root : 'React',
        commonjs : 'react',
        commonjs2 : 'react',
        amd : 'react'
      },
      "react/addons": {
        root : 'React',
        commonjs : 'react',
        commonjs2 : 'react',
        amd : 'react'
      },
    },

    stats: {
      colors: true,
      reasons: !release
    },

    plugins: release ? [,
      new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ] : [],

    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader:  '6to5-loader'
        },
        {
          test: /\.css$/,
          loader: 'style!css'
        },
        {
          test: /\.less$/,
          loader: 'style!css!less'
        },
        {
          test: /\.gif/,
          loader: 'url-loader?limit=10000&mimetype=image/gif'
        },
        {
          test: /\.jpg/,
          loader: 'url-loader?limit=10000&mimetype=image/jpg'
        },
        {
          test: /\.png/,
          loader: 'url-loader?limit=10000&mimetype=image/png'
        },
        {
          test: /\.js|.jsx$/,
          loader: 'jsx-loader?stripTypes&harmony'
        }
      ],
      postLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint'
      }
      ]
    }
  };
};
