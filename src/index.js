#!/usr/bin/env node

const readlineSync = require('readline-sync');

const Init = () => {
  const userName = readlineSync.question('May I have your name? ');

  console.log('Welcome to the Brain Games!');
  // Wait for user's response.
  console.log(`Hi, ${userName}!`);
};
export default Init;
