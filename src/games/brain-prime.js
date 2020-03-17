import { cons } from '@hexlet/pairs';
import {
  min,
  max,
  randomInt,
  init,
} from '../index';

export const welcomePhrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < Math.floor(num / 2); i += 1) {
    if ((num % i) === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const brainPrime = () => {
  const randomNum = randomInt(min, max);
  const rightAnswer = isPrime(randomNum);
  return cons(randomNum, rightAnswer);
};

const startBrainPrime = () => init(welcomePhrase, brainPrime);

export default startBrainPrime;
