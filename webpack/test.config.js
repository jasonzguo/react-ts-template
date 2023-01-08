const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = path.join(__dirname, '..');

module.exports = {
  mode: 'development',

  entry: [
    path.resolve(rootDir, 'src/test.tsx')
  ],

  output: {
    filename: 'test.js',
    path: path.resolve(rootDir, 'dist'),
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {},
    fallback: {}
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      }
    ]
  },

  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, 'src/test.html'),
      inject: false
    })
  ],

  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    port: 8081
  }
};
