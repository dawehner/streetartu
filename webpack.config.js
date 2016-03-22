var path = require('path');
var webpack = require('webpack');

var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./app/data');

module.exports = [
   {
      entry: './app/main.js',
      output: { path: __dirname, filename: 'bundle.js' },
      module: {
          loaders: [
            {
              test: /\.css$/, loader: "style-loader!css-loader"
            },
            {
                  test: /.jsx?$/,
                  loader: 'babel-loader',
                  exclude: /node_modules/,
                  query: {
                      presets: ['es2015', 'react']
                  }
             }
          ]
      }
  },
/**
  {
    entry: './app/entry.js',

    output: {
      filename: 'bundle_static.js',
      path: __dirname,
      libraryTarget: 'umd'
    },

    module: {
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }

//    plugins: [
 //     new StaticSiteGeneratorPlugin('bundle_static.js', data.routes, data)
  //  ]
  }
*/
];

