var path = require('path');
var SRC = path.join(__dirname, 'src/');
var NODE_MODULES = path.join(__dirname, 'node_modules/');

var config = {
    entry: './src',               // entry point
    output: {                     // output folder
        path: './dist',           // folder path
        filename: 'my-app.js'     // file name
    },
    resolve: {
        root: [SRC, NODE_MODULES],
        alias: {
            'actions': path.join(SRC, 'actions/')
        }
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel']
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css']
        }
      ]
    }
}
module.exports = config;
