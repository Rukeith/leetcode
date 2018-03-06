/**
 * 168. Excel Sheet Column Title
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 * 
 * For example:
 *     1 -> A
 *     2 -> B
 *     3 -> C
 *     ...
 *     26 -> Z
 *     27 -> AA
 *     28 -> AB 
 * 
 * @param {number} n
 * @return {string}
 * 
 * URL:
 * https://leetcode.com/problems/excel-sheet-column-title/description/
 */
var convertToTitle = function(n) {
  let result = '';
  while(n-- > 0) {
    result = String.fromCharCode(65 + n % 26) + result;
    n = Math.floor(n / 26);
  }
  return result;
};