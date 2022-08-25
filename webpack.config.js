const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
//const ExtensionReloader  = require('webpack-extension-reloader');
 
module.exports = {
  entry: {
    content:'./src/content.js',
    index:'./src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          'postcss-loader'
        ]
      }
    ],
  },
  plugins: [  
    new CopyPlugin({
      patterns: [
        { from: "public/manifest.json" },
        { from: "src/background.js" }
      ],
    }),
    new HtmlWebpackPlugin({ 
      template: 'public/index.html',
      chunks: ["index"],
  }),
  
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    modules: ['src', 'node_modules'] // Assuming that your files are inside the src dir
},
mode:"production",
devtool: 'inline-source-map'
};