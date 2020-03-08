const checkIfArrayIsValid = array =>
    !Array.isArray(array) ||
    !Boolean(array.length) ||
    (array.length === 1 && array[0] === 0);
exports.min = function min(array) {
    if (checkIfArrayIsValid(array)) return 0;

    array.sort((a, b) => a - b);

    return array[0];
};

exports.max = function max(array) {
    if (checkIfArrayIsValid(array)) return 0;

    array.sort((a, b) => a - b);

    return array[array.length - 1];
};

exports.avg = function avg(array) {
    if (checkIfArrayIsValid(array)) return 0;

    const res = array.reduce(
        (previousValue, currentItem) => previousValue + currentItem,
        0
    );

    return res / array.length;
};
