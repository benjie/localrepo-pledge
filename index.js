#!/usr/bin/env node
const { readFileSync } = require('fs');
console.log(readFileSync('./README.md', 'utf8'));
