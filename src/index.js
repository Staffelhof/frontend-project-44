import readlineSync from 'readline-sync';
import getPlayerName from './cli.js';

export const randomInt = (num) => Math.floor(Math.random() * num);

export const getAnswerForQuestion = (point) => {
  console.log(`Question: ${point}`);
  return readlineSync.question('Your answer: ');
};

const correctAnswerResponse = () => {
  console.log('Correct!');
  return true;
};

const wrongAnswerResponse = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export const checkAnswer = (point, correctAnswer, name) => {
  const answer = getAnswerForQuestion(point);
  return (answer === correctAnswer
    ? correctAnswerResponse()
    : wrongAnswerResponse(answer, correctAnswer, name));
};

const playThreeRounds = (name, game) => {
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

export const initAndStartGameWithRules = (game, gameRules) => {
  const name = getPlayerName();
  console.log(gameRules);
  const numberOfWins = playThreeRounds(name, game);
  if (numberOfWins === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
