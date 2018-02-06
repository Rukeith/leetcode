/**
 * 258. Add Digits
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 * 
 * For example:
 * Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
 * 
 * Follow up:
 * Could you do it without any loop/recursion in O(1) runtime?
 * 
 * Credits:
 * Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
 * 
 * @param {number} num
 * @return {number}
 * 
 * URL:
 * https://leetcode.com/problems/remove-element/
 */
var addDigits = function(num) {
  return 1 + (num - 1) % 9;
};