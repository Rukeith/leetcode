/**
 * 371. Sum of Two Integers
 * Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
 *
 * Example:
 * Given a = 1 and b = 2, return 3.
 */

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
