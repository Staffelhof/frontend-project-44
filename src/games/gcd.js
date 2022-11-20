import {
  question, randomInt, checkAnswer,
} from '../index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const gcdGame = (name) => {
  const firstNum = randomInt(100);
  const secondNum = randomInt(100);
  const point = `${firstNum} ${secondNum}`;
  const correctAnswer = gcd(firstNum, secondNum);
  const answer = question(point);
  return checkAnswer(answer, correctAnswer.toString(), name);
};

export const rules = 'Find the greatest common divisor of given numbers.';

export default gcdGame;
