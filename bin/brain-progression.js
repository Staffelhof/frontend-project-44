#!/usr/bin/env node
import * as game from '../src/games/progression.js';
import { initAndStartGameWithRules } from '../src/index.js';

initAndStartGameWithRules(game.default, game.rules);
