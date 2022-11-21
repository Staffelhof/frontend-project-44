import {
  randomInt, checkAnswer,
} from '../index.js';

const makeProgression = (start, length, step) => {
  const result = [start];
  for (let i = 1; i < length; i += 1) {
    result.push(result[i - 1] + step);
  }
  return result;
};

const progressionGame = (name) => {
  const progressionLength = randomInt(10) + 5;
  const progressionStep = randomInt(5) + 1;
  const progressionStart = randomInt(100);
  const hideNumber = randomInt(progressionLength);
  const progression = makeProgression(progressionStart, progressionLength, progressionStep);
  const correctAnswer = progression[hideNumber];
  progression[hideNumber] = '..';
  return checkAnswer(progression.join(' '), correctAnswer.toString(), name);
};

export const rules = 'What number is missing in the progression?';

export default progressionGame;
