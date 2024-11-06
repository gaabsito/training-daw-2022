function printMultiplicationTables() {
    let output = "    "; 

    for (let i = 1; i <= 10; i++) {
        output += `${i}\t`;
    }
    console.log(output);

    for (let i = 1; i <= 10; i++) {
        output = `${i}\t`;
        for (let j = 1; j <= 10; j++) {
            output += `${i * j}\t`;
        }
        console.log(output);
    }
}

printMultiplicationTables();
// expected output:
//     1   2   3   ... 10
// 1   1   2   3   ... 10
// 2   2   4   6   ... 20
// ...
// 10  10  20  30  ... 100
