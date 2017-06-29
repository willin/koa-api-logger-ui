const program = require('commander');
const { version } = require('../package.json');

program
  .version(version)
  .useage('[options]')
  .option('-c --config <file>', 'Config File Path');

if (!program.config) {
  program.help();
  process.exit();
}
/* eslint-disable import/no-dynamic-require */
const config = require(program.config);
const Ui = require('./ui');

const app = new Ui(config);
app.start();
