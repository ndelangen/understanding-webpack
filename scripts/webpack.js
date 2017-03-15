#!/usr/bin/env node

const webpack = require('webpack');
const config = require('../webpack.config');

config.entry = './src/async';

const compiler = webpack(config, (error, stats) => {
  error ? console.error(error) : console.log('🐳 ', 'WEBPACK COMPILED from node', stats.toString());
});
