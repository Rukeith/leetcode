/**
 * 9. Palindrome Number
 * Determine whether an integer is a palindrome. Do this without extra space.
 *
 * Some hints:
 * Could negative integers be palindromes? (ie, -1)
 * If you are thinking of converting the integer to string, note the restriction of using extra space.
 * You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?
 * There is a more generic way of solving this problem.
 * 
 * @param {number} x
 * @return {boolean}
 * 
 * URL:
 * https://leetcode.com/problems/palindrome-number/
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  else if (x < 10) return true;
  else if (x % 10 === 0) return false;
  let _x = x;
  let num = 0;
  while(num < x) {
    num = num * 10 + Math.floor(_x % 10);
    _x = Math.floor(_x / 10);
  }
  return num === x;
};