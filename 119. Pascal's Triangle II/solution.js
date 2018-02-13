/**
 * 119. Pascal's Triangle II
 * Given an index k, return the kth row of the Pascal's triangle.
 * 
 * For example, given k = 3,
 * Return [1,3,3,1].
 * 
 * Note:
 * Could you optimize your algorithm to use only O(k) extra space?
 * 
 * Based on rules:
 * row k of Pascal’s Triangle:
 * [C(k,0), C(k,1), ..., C(k, k-1), C(k, k)]
 * and
 * C[k,i] = C[k,i-1]*(k-i+1)/i
 * 
 * @param {number} rowIndex
 * @return {number[]}
 * 
 * URL:
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 */
var getRow = function(rowIndex) {
  const row = [1];
  for (let i = 1; i < (rowIndex + 1); i++) {
    row[i] = (row[i - 1] * (rowIndex - (i - 1)) / i);
  }
  return row;
};