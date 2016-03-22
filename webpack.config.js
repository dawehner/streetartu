var path = require('path');
var webpack = require('webpack');

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
];

