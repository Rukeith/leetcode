/**
 * @param {number} x
 * @return {number}
 * 
 * 7. Reverse Integer
 * Reverse digits of an integer.
 * Have you thought about this?
 * Here are some good questions to ask before coding.
 * Bonus points for you if you have already thought through this!
 * If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
 * Did you notice that the reversed integer might overflow?
 * Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows.
 * How should you handle such cases?
 * For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 *
 * Example:
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 *
 * URL:
 * https://leetcode.com/problems/reverse-integer/
 */
var reverse = function(x) {
  let absX = Math.abs(x);
  let result = 0;
  while (absX > 0) {
    result = result * 10 + absX % 10;
    absX = parseInt(absX / 10, 10);
  }
  result = x < 0 ? -result : result;
  return result >= -Math.pow(2, 31) && result <= Math.pow(2, 31) - 1 ? result : 0;
};
