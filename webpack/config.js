const { merge } = require('webpack-merge');

const baseConfig = require('./base.config');
const devConfig = require('./dev.config');
const prodConfig = require('./prod.config');

let config = null;

switch (process.env.NODE_ENV) {
  case 'production':
    config = merge(baseConfig, prodConfig);
    break;
  case 'development':
  default:
    config = merge(baseConfig, devConfig);
}

module.exports = config;
