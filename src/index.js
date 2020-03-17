#!/usr/bin/env node
import { car, cdr } from '@hexlet/pairs';

import readlineSync from 'readline-sync';

export const min = 1;
export const max = 100;
const rounds = 3;

export const randomInt = (minimum, maximum) => {
  const rand = minimum + Math.random() * (maximum - minimum + 1);
  return Math.floor(rand);
};

export const init = (welcomePhrase, gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(welcomePhrase);

  for (let i = 0; i < rounds; i += 1) {
    const brainEvenPair = gameFunction();
    console.log(`Question: ${car(brainEvenPair)}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const rightAnswer = cdr(brainEvenPair);
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
