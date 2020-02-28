import { cons } from '@hexlet/pairs';
import
{
  MAXIMUM, MINIMUM, randomInt, LENGTH_OF_PROGRESSION,
} from '../index';

export const WELCOMEPHRASE = 'What number is missing in the progression?';

export const brainProgression = () => {
  const element1 = randomInt(MINIMUM, MAXIMUM);
  const difference = randomInt(MINIMUM, MAXIMUM);
  const progression = new Array(LENGTH_OF_PROGRESSION);
  const randomIndex = randomInt(0, LENGTH_OF_PROGRESSION - 1);
  let rightAnswer = 0;

  for (let i = 0; i < LENGTH_OF_PROGRESSION; i += 1) {
    if (i !== randomIndex) {
      progression[i] = element1 + (i - 1) * difference;
    } else {
      rightAnswer = element1 + (i - 1) * difference;
      progression[i] = '..';
    }
  }
  const question = progression.join(' ');
  return cons(`${question}`, rightAnswer.toString());
};
