#!/usr/bin/env node
import * as game from '../src/games/progression.js';
import { startGame } from '../src/index.js';

startGame(game.default, game.rules);
