import { cons } from '@hexlet/pairs';
import { MAXIMUM, MINIMUM, randomInt } from '../index';

export const WELCOMEPHRASE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < Math.floor(num / 2); i += 1) {
    if ((num % i) === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const brainPrime = () => {
  const randomNum = randomInt(MINIMUM, MAXIMUM);
  const rightAnswer = isPrime(randomNum);
  return cons(randomNum, rightAnswer);
};
