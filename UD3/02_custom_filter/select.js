function select(array, condition) {
    return array.filter(element => condition(element));
}

module.exports = select;
