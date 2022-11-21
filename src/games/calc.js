import {
  checkAnswer, randomInt,
} from '../index.js';

const calcGame = (name) => {
  const operationNumber = randomInt(3);
  const firstNumber = randomInt(100);
  const secondNumber = randomInt(100);
  let correctAnswer;
  let sign;
  switch (operationNumber) {
    case 0:
      correctAnswer = firstNumber + secondNumber;
      sign = '+';
      break;
    case 1:
      correctAnswer = firstNumber - secondNumber;
      sign = '-';
      break;
    default:
      correctAnswer = firstNumber * secondNumber;
      sign = '*';
      break;
  }
  const point = `${firstNumber} ${sign} ${secondNumber}`;

  return checkAnswer(point, correctAnswer.toString(), name);
};

export const rules = 'What is the result of the expression?';

export default calcGame;
