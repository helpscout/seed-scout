#!/usr/bin/env node
'use strict';
const cli = require('./cli/index');
const isBlank = require('is-blank');
const requireDir = require('require-dir', { log: false });
const command = cli.input[0];

global.path = __dirname;

if (isBlank(command) && isBlank(cli.flags)) {
  console.log(cli.help);
  process.exit(0);
} else {
  // Require all commands
  requireDir('./cli/commands', { recurse: true });
}
