import {
  question, randomInt, checkAnswer,
} from '../index.js';

const YES_ANSWER = 'yes';
const NO_ANSWER = 'no';

const evenGame = (name) => {
  const number = randomInt(100);
  const correctAnswer = number % 2 === 0 ? YES_ANSWER : NO_ANSWER;
  const answer = question(number);
  return checkAnswer(answer, correctAnswer, name);
};

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default evenGame;
