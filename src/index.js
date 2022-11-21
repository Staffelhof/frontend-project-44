import readlineSync from 'readline-sync';
import start from './cli.js';

export const randomInt = (num) => Math.floor(Math.random() * num);

export const question = (point) => {
  console.log(`Question: ${point}`);
  return readlineSync.question('Your answer: ');
};

const correctAnswerText = () => {
  console.log('Correct!');
  return true;
};

const wrongAnswerText = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export const checkAnswer = (point, correctAnswer, name) => {
  const answer = question(point);
  return (answer === correctAnswer
    ? correctAnswerText()
    : wrongAnswerText(answer, correctAnswer, name));
};

const play = (name, game) => {
  let numberOfWins = 0;
  for (let i = 0; i < 3; i += 1) {
    const result = game(name);
    if (!result) {
      break;
    }
    numberOfWins += 1;
  }
  return numberOfWins;
};

export const startGame = (game, gameRules) => {
  const name = start();
  console.log(gameRules);
  const numberOfWins = play(name, game);
  if (numberOfWins === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
