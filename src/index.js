import readlineSync from 'readline-sync';
import getPlayerName, { greetingMessage } from './cli.js';

export const randomInt = (max) => Math.floor(Math.random() * max);

export const startGame = (gameData, gameRules) => {
  greetingMessage();
  const name = getPlayerName();
  console.log(gameRules);
  for (let i = 0; i < 3; i += 1) {
    const questionAndAnswerPair = gameData();
    const question = questionAndAnswerPair[0];
    const correctAnswer = questionAndAnswerPair[1];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
