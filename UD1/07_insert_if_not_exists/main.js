function insert(array, item, position) {
    if (!array.includes(item)) {
        if (position) {
            array.unshift(item);
        } else {
            array.push(item);
        }
    }
    return array;
}

// Ejemplo de uso
let array = ['pera', 'manzana'];

console.log(insert(array, 'pera', false));        // ['pera', 'manzana']
console.log(insert(array, 'melón', false));       // ['pera', 'manzana', 'melón']
console.log(insert(array, 'melocotón', true));    // ['melocotón', 'pera', 'manzana', 'melón']
