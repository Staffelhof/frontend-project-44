import {
  question, checkAnswer, randomInt,
} from '../index.js';

const calcGame = (name) => {
  const operationNumber = randomInt(3);
  const firstNumber = randomInt(100);
  const secondNumber = randomInt(100);
  let correctAnswer = 0;
  let point = '';
  switch (operationNumber) {
    case 0:
      correctAnswer = firstNumber + secondNumber;
      point = `${firstNumber} + ${secondNumber}`;
      break;
    case 1:
      correctAnswer = firstNumber - secondNumber;
      point = `${firstNumber} - ${secondNumber}`;
      break;
    default:
      correctAnswer = firstNumber * secondNumber;
      point = `${firstNumber} * ${secondNumber}`;
      break;
  }
  const answer = question(point);
  return checkAnswer(answer, correctAnswer.toString(), name);
};

export const rules = 'What is the result of the expression?';

export default calcGame;
