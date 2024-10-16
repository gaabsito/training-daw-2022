const assert = require('assert').strict;

function createPerson(name, lastname, years, gender, address) {
    return {
        name: name,
        lastname: lastname,
        years: years,
        gender: gender,
        address: address
    };
}

let person = createPerson('John', 'Foo', 35, 'male', 'fake street 123');

assert.strictEqual(person.name, 'John');
assert.strictEqual(person.lastname, 'Foo');

console.log("Test OK");
