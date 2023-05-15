import { randomInt } from '../index.js';

const evenGame = () => {
  const number = randomInt(100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default evenGame;
