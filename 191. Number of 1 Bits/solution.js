/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  return (n).toString(2).replace(/0/g, '').length;
  // let result = 0;
  // while (n) {
  //   result += n % 2;
  //   n = n >>> 1;
  // }
  // return result;
};