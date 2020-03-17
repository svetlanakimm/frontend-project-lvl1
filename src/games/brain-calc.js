import { cons } from '@hexlet/pairs';
import {
  min,
  max,
  randomInt,
  init,
} from '../index';

const welcomePhrase = 'What is the result of the expression?';
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

const brainCalc = () => {
  const randomNum1 = randomInt(min, max);
  const randomNum2 = randomInt(min, max);
  const randomOperator = getOperator();
  const rightAnswer = myEval(randomNum1, randomOperator, randomNum2);
  return cons(`${randomNum1} ${randomOperator} ${randomNum2}`, rightAnswer.toString());
};

const startBrainCalc = () => init(welcomePhrase, brainCalc);

export default startBrainCalc;
