#!/usr/bin/env node
import * as game from '../src/games/calc.js';
import { startGame } from '../src/index.js';
import start from '../src/cli.js';

const name = start();
startGame(name, game.default, game.rules);
