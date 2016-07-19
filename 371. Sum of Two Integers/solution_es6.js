/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
    while (b !== 0) {
        let x = a & b;
        a = a ^ b;
        b = x << 1;
    }
    return a;
};

//console.log(getSum(1, 2));
