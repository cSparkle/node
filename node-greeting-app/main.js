//require essentially imports the entire module in the path location to this file for use which is why we can use the functions from greeting.js
const greetings = require('./greeting.js');
const other = require('./secondModule.js');

greetings.greetingEnglish();

greetings.greetingJapanese();

greetings.greetingSpanish();

greetings.greetingIcelandic();

other.loveCoding();

other.addNumbers(1, 2);

//to see the correct output in BASH type: node main.js