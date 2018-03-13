/**
 * 191. Number of 1 Bits
 * Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
 * For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.
 * 
 * @param {number} n - a positive integer
 * @return {number}
 * 
 * URL:
 * https://leetcode.com/problems/number-of-1-bits/description/
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