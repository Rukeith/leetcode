/**
 * 125. Valid Palindrome
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * 
 * For example,
 * "A man, a plan, a canal: Panama" is a palindrome.
 * "race a car" is not a palindrome.
 * 
 * Note:
 * Have you consider that the string might be empty? This is a good question to ask during an interview.
 * For the purpose of this problem, we define empty string as valid palindrome.
 * 
 * @param {string} s
 * @return {boolean}
 * 
 * URL:
 * https://leetcode.com/problems/valid-palindrome/description/
 */
var isPalindrome = function(s) {
  const filterString = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
  const reverseString = filterString.split('').reverse().join('');
  return filterString === reverseString;
};