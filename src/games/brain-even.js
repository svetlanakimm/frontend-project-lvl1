import { cons } from '@hexlet/pairs';
import {
  min,
  max,
  randomInt,
  init,
} from '../index';

export const welcomePhrase = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => {
  if ((num % 2) === 0) {
    return 'yes';
  }
  return 'no';
};

export const brainEven = () => {
  const randomNum = randomInt(min, max);
  const rightAnswer = isEven(randomNum);
  return cons(randomNum, rightAnswer);
};

const startBrainEven = () => init(welcomePhrase, brainEven);

export default startBrainEven;
