/**
 * 172. Factorial Trailing Zeroes
 * Given an integer n, return the number of trailing zeroes in n!.
 * Note: Your solution should be in logarithmic time complexity.
 * 
 * @param {number} n
 * @return {number}
 * 
 * URL:
 * https://leetcode.com/problems/factorial-trailing-zeroes/description/
 */
var trailingZeroes = function(n) {
  let result = 0;
  for (let i = Math.trunc(Math.log(n) / Math.log(5)); i > 0; i--) {
    result += Math.trunc(n / Math.pow(5, i));
  }
  return result;
};