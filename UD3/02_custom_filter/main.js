const assert = require('assert').strict;

function select(array, condition) {
    return array.filter(condition);
}

function pairs(num) {
    return num % 2 === 0;
}

function gt15(num) {
    return num > 15;
}

function lt10(num) {
    return num < 10;
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29];

assert.deepStrictEqual(select(values, pairs), [2]);

assert
