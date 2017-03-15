#!/usr/bin/env node

const args = require('args');
const child_process = require('child_process');

const suites = {
  lint: options => {
    child_process.spawnSync('eslint', ['./src', '--fix'], {
      stdio: ['inherit', 'inherit', 'inherit']
    });
  },
  unit: options => {
    child_process.spawnSync('jest', ['--config', '.jestrc'], {
      stdio: ['inherit', 'inherit', 'inherit']
    });
  },
  integration: options => {
    console.log('UNIMPLEMENTED');
  },
  unknown: name => {
    console.warn(`UNKNOWN SUITE: ${name}`);
  }
};

const all = (name, sub, options) => {
  console.log('ALL', 'NOT IMPLEMENTED YET', { name, sub, options });
};
const run = (name, sub, options) => {
  []
    .concat(name)
    .concat(sub)
    .map(item => suites[item] || suites.unknown.bind(undefined, item))
    .forEach(item => item(options));
};

args
  .option('pattern', 'a regex to use a a pattern match')
  .option('watch', 'keep running until quit and listen for filechanges')
  .command('all', 'run everything', all)
  .command('lint', 'run linting', run)
  .command('unit', 'run unit tests', run)
  .command('integration', 'run intergration tests', run);

args.parse(process.argv);
