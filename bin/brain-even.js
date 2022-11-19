#!/usr/bin/env node
import even from '../src/even.js';
import start from '../src/cli.js';

const name = start();
even(name);
