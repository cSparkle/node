const myLibrary = require('./my-library');
const uuid = require('uuid');

const newUuid = uuid();

console.log(`Your new Universally Unique Identifier is ${newUuid}`);

myLibrary.myFirstMethod();