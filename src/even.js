import readlineSync from 'readline-sync';

const even = (name) => {
  const YES_ANSWER = 'yes';
  const NO_ANSWER = 'no';

  let numberOfWins = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = number % 2 === 0 ? YES_ANSWER : NO_ANSWER;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer.toLowerCase() === 'yes' && number % 2 === 0) {
      console.log('Correct!');
      numberOfWins += 1;
    } else if (answer.toLowerCase() === 'no' && number % 2 !== 0) {
      console.log('Correct!');
      numberOfWins += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (numberOfWins === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default even;
