import { randomInt } from '../index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const gcdGame = () => {
  const firstNum = randomInt(100);
  const secondNum = randomInt(100);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = gcd(firstNum, secondNum);
  return [question, correctAnswer.toString()];
};

export const rules = 'Find the greatest common divisor of given numbers.';

export default gcdGame;
