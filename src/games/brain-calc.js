import { cons } from '@hexlet/pairs';
import { MAXIMUM, MINIMUM, randomInt } from '../index';

export const WELCOMEPHRASE = 'What is the result of the expression?';
const randomChoice = (arr) => arr[randomInt(0, arr.length - 1)];
const getOperator = () => randomChoice(['+', '-', '*']);

const myEval = (num1, operator, num2) => {
  switch (`${operator}`) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return console.log('Wrong operator');
  }
};

export const brainCalc = () => {
  const randomNum1 = randomInt(MINIMUM, MAXIMUM);
  const randomNum2 = randomInt(MINIMUM, MAXIMUM);
  const randomOperator = getOperator();
  const rightAnswer = myEval(randomNum1, randomOperator, randomNum2);
  return cons(`${randomNum1} ${randomOperator} ${randomNum2}`, rightAnswer.toString());
};
