const { merge, mergeWithCustomize, customizeObject, unique } = require('webpack-merge');

const baseConfig = require('./base.config');
const prodConfig = require('./prod.config');
const testConfig = require('./test.config');
const devConfig = require('./dev.config');

let config = null;

switch (process.env.NODE_ENV) {
  case 'production':
    config = merge(baseConfig, prodConfig);
    break;
  case 'test':
    config = testConfig;
    break;
  case 'development':
  default:
    config = merge(baseConfig, devConfig);
}

module.exports = config;
