#!/usr/bin/env node

import { Init } from '..';
import { WELCOMEPHRASE, brainCalc } from '../games/brain-calc';

Init(WELCOMEPHRASE, brainCalc);
