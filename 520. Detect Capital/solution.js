/**
 * 520. Detect Capital
 * Given a word, you need to judge whether the usage of capitals in it is right or not.
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital if it has more than one letter, like "Google".
 * Otherwise, we define that this word doesn't use capitals in a right way.
 * 
 * Example 1:
 * Input: "USA"
 * Output: True
 * 
 * Example 2:
 * Input: "FlaG"
 * Output: False
 * Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
 * 
 * @param {string} word
 * @return {boolean}
 * 
 * URL:
 * https://leetcode.com/problems/detect-capital/description/
 */
var detectCapitalUse = function(word) {
  const n = word.length;
  let lower = 0;
  for (let l of word) if (l > 'Z') lower++;
  return lower === n || lower === 0 || (word[0] < 'a' && lower === n - 1);

  // Method two: use regex
  // const regex = /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z][a-z]*$)/
  // return regex.test(word)
};