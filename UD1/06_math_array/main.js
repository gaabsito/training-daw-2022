function doCalculation(array) {
    if (array.length === 0) {
        console.log("El array está vacío.");
        return;
    }

    const sum = array.reduce((acc, num) => acc + num, 0);
    
    const max = Math.max(...array);
    
    const min = Math.min(...array);
    
    const average = sum / array.length;
    
    console.log(`Suma: ${sum}`);
    console.log(`Máximo: ${max}`);
    console.log(`Mínimo: ${min}`);
    console.log(`Media: ${average}`);
}

doCalculation([1, 2, 3, 4]);
doCalculation([5, 5, 5, 5]);
doCalculation([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]);
