#!/usr/bin/env node

var readlineSync = require('readline-sync');
const Init = () => {
    console.log('Welcome to the Brain Games!');
    // Wait for user's response.
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hi, ' + userName + '!');
};
export default Init;