#!/usr/bin/env node
import * as game from '../src/games/prime.js';
import { startGame } from '../src/index.js';

startGame(game.default, game.rules);
