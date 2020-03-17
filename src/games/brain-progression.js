import { cons } from '@hexlet/pairs';
import
{
  min,
  max,
  randomInt,
  init,
} from '../index';

const lengthOfProgression = 10;

export const welcomePhrase = 'What number is missing in the progression?';

export const brainProgression = () => {
  const element1 = randomInt(min, max);
  const difference = randomInt(min, max);
  const progression = new Array(lengthOfProgression);
  const randomIndex = randomInt(0, lengthOfProgression - 1);
  let rightAnswer = 0;

  for (let i = 0; i < lengthOfProgression; i += 1) {
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

const startBrainProgression = () => init(welcomePhrase, brainProgression);

export default startBrainProgression;
