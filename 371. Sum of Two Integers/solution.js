/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b !== 0) {
        var x = a & b;
        a = a ^ b;
        b = x << 1;
    }
    return a;
};

//console.log(getSum(1, 2));
