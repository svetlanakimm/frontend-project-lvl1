#!/usr/bin/env node
import { car, cdr } from '@hexlet/pairs';

const readlineSync = require('readline-sync');

export const MINIMUM = 1;
export const MAXIMUM = 100;
const ROUNDS = 3;

export const randomInt = (min, max) => {
  const rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
};

export const Init = (welcomePhrase, gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(welcomePhrase);

  for (let i = 0; i < ROUNDS; i += 1) {
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
