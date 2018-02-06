/**
 * 14. Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * @param {string[]} strs
 * @return {string}
 * 
 * URL:
 * https://leetcode.com/problems/longest-common-prefix/description/
 */
var longestCommonPrefix = function(strs) {
  const len = strs.length;
  if (len == 0) return "";
  let prefix = strs[0];

  for (let i = 1; i < len; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};