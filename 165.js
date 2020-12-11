const util = require('util');

const name = 'kay';
const greeting = util.format('Hello %s', name);
console.log(greeting);