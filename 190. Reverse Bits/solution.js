/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = result * 2 + (n % 2);
    n = n >>> 1;
  }
  return result;
};
