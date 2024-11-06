function insert(array, item, position) {
    // Verificamos si el elemento ya existe en el array
    if (!array.includes(item)) {
        if (position) {
            // Insertar al principio si `position` es true
            array.unshift(item);
        } else {
            // Insertar al final si `position` es false
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
