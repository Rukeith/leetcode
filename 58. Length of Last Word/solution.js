/**
 * 58. Length of Last Word
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
 * If the last word does not exist, return 0.
 * Note: A word is defined as a character sequence consists of non-space characters only.
 * 
 * Example:
 * Input: "Hello World"
 * Output: 5
 * 
 * @param {string} s
 * @return {number}
 * 
 * URL:
 * https://leetcode.com/problems/length-of-last-word/description/
 */
var lengthOfLastWord = function(s) {
  const arr = s.split(' ');
  let len = arr.length;
  while (!arr[len - 1] && len > 1) {
    len--;
  }
  return arr[len - 1].length;
};