import { randomInt } from '../index.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const primeGame = () => {
  const number = randomInt(100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default primeGame;
