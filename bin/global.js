#!/usr/bin/env node
const library = require('../lib/index');
const mins = parseFloat(process.argv[2], 10);


library.notify(mins);