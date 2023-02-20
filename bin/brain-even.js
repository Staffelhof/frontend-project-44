#!/usr/bin/env node
import * as game from '../src/games/even.js';
import { initAndStartGameWithRules } from '../src/index.js';

initAndStartGameWithRules(game.default, game.rules);
