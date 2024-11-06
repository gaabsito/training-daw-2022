const assert = require('assert').strict;

function nextPairs(value) {
    return [value - (value % 2 === 0 ? 2 : 1), value + (value % 2 === 0 ? 2 : 1)];
}

assert.deepStrictEqual(nextPairs(3), [2, 4]);
assert.deepStrictEqual(nextPairs(4), [2, 6]);
