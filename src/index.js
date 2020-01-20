#!/usr/bin/env node

const readlineSync = require('readline-sync');

const MINIMUM = 1;
const MAXIMUM = 100;
const ROUNDS = 3;

export const randomInt = (min, max) => {
  const rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
};
const Init = (welcomePhrase) => {
  console.log('Welcome to the Brain Games!');
  console.log(welcomePhrase);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);

  for (let i = 0; i < ROUNDS; i += 1) {
    const randomNum = randomInt(MINIMUM, MAXIMUM);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isEven = (num) => {
      if ((num % 2) === 0) {
        return 'yes';
      }
      return 'no';
    };
    const rightAnswer = isEven(randomNum);
    if (rightAnswer === userAnswer) {
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      } else {
        console.log('Correct!');
      }
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};
export default Init;
