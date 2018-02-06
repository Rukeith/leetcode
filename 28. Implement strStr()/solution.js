/**
 * 28. Implement strStr()
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * Example 2:
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 * URL:
 * https://leetcode.com/problems/implement-strstr/description/
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};