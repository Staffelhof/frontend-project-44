import readlineSync from 'readline-sync';

const getPlayerName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const greetingMessage = () => {
  console.log('Welcome to the Brain Games!');
};
export default getPlayerName;
