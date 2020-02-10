import { cons } from '@hexlet/pairs';
import { MAXIMUM, MINIMUM, randomInt } from '../index';

export const WELCOMEPHRASE = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let curr1 = num1;
  let curr2 = num2;
  while (curr1 !== curr2) {
    if (curr1 > curr2) {
      curr1 -= curr2;
    } else {
      curr2 -= curr1;
    }
  }
  return curr1;
};

export const brainGCD = () => {
  const randomNum1 = randomInt(MINIMUM, MAXIMUM);
  const randomNum2 = randomInt(MINIMUM, MAXIMUM);
  const rightAnswer = getGCD(randomNum1, randomNum2);
  return cons(`${randomNum1} ${randomNum2}`, rightAnswer.toString());
};
