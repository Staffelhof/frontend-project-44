import { randomInt } from '../index.js';

const calcGame = () => {
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
    case 2:
      correctAnswer = firstNumber * secondNumber;
      sign = '*';
      break;
    default:
      console.log('Error while computing operation');
      return;
  }
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  return [question, correctAnswer.toString()];
};

export const rules = 'What is the result of the expression?';

export default calcGame;
