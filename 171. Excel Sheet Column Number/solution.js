/**
 * 171. Excel Sheet Column Number
 * Related to question Excel Sheet Column Title
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 * 
 * For example:
 *     A -> 1
 *     B -> 2
 *     C -> 3
 *     ...
 *     Z -> 26
 *     AA -> 27
 *     AB -> 28 
 * 
 * @param {string} s
 * @return {number}
 * 
 * URL:
 * https://leetcode.com/problems/excel-sheet-column-number/description/
 */
var titleToNumber = function(s) {
  return s.split('').reduce((acc, c) => acc * 26 + c.charCodeAt(0) - 64, 0);
};
