const path = require('path');
const webpack = require('webpack');

const rootDir = path.join(__dirname, '..');

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  },

  devServer: {
    hotOnly: true,
    historyApiFallback: true,
    publicPath: '/',
    port: 8080
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
