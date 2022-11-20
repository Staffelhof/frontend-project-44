import readlineSync from 'readline-sync';

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

export const checkAnswer = (answer, correctAnswer, name) => (answer === correctAnswer
  ? correctAnswerText()
  : wrongAnswerText(answer, correctAnswer, name));

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

export const startGame = (name, game, gameRules) => {
  console.log(gameRules);
  const numberOfWins = play(name, game);
  if (numberOfWins === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
