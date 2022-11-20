import {
  question, randomInt, checkAnswer,
} from '../index.js';

const YES_ANSWER = 'yes';
const NO_ANSWER = 'no';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const primeGame = (name) => {
  const number = randomInt(100);
  const correctAnswer = isPrime(number) ? YES_ANSWER : NO_ANSWER;
  const answer = question(number);
  return checkAnswer(answer, correctAnswer, name);
};

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default primeGame;
