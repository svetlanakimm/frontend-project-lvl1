import { cons } from '@hexlet/pairs';
import { MINIMUM, MAXIMUM, randomInt } from '../index';

export const WELCOMEPHRASE = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => {
  if ((num % 2) === 0) {
    return 'yes';
  }
  return 'no';
};

export const brainEven = () => {
  const randomNum = randomInt(MINIMUM, MAXIMUM);
  const rightAnswer = isEven(randomNum);
  return cons(randomNum, rightAnswer);
};
