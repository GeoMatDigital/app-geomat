const webpack = require('webpack');
const commonConfig = require('@ionic/app-scripts/config/webpack.config');
const webpackMerge = require('webpack-merge');
const dotenv = require('dotenv-webpack');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const API_URL = process.env.API_URL;
const API_URL2 = process.env.API_URL2;
const SENTRY_DSN = process.env.SENTRY_DSN;

const environmentVariables = {
  plugins: [
    new dotenv({
      path: './.env'
    }),

    /**
     * Plugin: DefinePlugin
     * Description: Define free variables.
     * Useful for having development builds with debug logging or adding global constants.
     *
     * Environment helpers
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
     */
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'NODE_ENV': JSON.stringify(ENV),
        'API_URL' : JSON.stringify(API_URL),
        'API_URL2' : JSON.stringify(API_URL2),
        'SENTRY_DSN': JSON.stringify(SENTRY_DSN)
      }
    })
  ]
};

module.exports = webpackMerge(commonConfig, environmentVariables);
