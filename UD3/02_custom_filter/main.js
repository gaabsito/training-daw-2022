const select = require('./select');

const numbers = [1, 2, 3, 4, 5];
const isEven = num => num % 2 === 0;

const evenNumbers = select(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4]
