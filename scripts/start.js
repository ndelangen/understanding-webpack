#!/usr/bin/env node

const args = require('args');
const path = require('path');
const child_process = require('child_process');

const dev = (name, sub, options) => {
  require('babel-register');
  require(path.join(__dirname, '..', 'src', options.entry));
};
const prod = (name, sub, options) => {
  child_process.spawnSync(
    'webpack',
    ['--config', './webpack.config', '--entry', `./src/${options.entry}`],
    {
      stdio: ['inherit', 'inherit', 'inherit']
    }
  );
  child_process.spawnSync('node', ['./dist/index.js'], {
    stdio: ['inherit', 'inherit', 'inherit']
  });
};

args
  .option('entry', 'entrypoint of the application', 'index')
  .option('port', 'port to serve on', 8091)
  .command('dev', 'start as development', dev, ['development'])
  .command('prod', 'start as production', prod, ['production']);

args.parse(process.argv);
