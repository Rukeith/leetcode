/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 
 * 67. Add Binary
 * Given two binary strings, return their sum (also a binary string).
 * 
 * For example,
 * a = "11"
 * b = "1"
 * Return "100".
 * 
 * URL:
 * https://leetcode.com/problems/add-binary/description/
 */
var addBinary = function(a, b) {
  let s = "", c = 0, i = a.length - 1, j = b.length - 1;
  while(i >= 0 || j >= 0 || c == 1) {
    c += (i >= 0 ? a[i--] - 0 : 0);
    c += (j >= 0 ? b[j--] - 0 : 0);
    s = c % 2 + s;
    c = Math.floor(c / 2);
  }
  
  return s;
};