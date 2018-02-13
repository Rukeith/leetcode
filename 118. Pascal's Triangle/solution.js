/**
 * 118. Pascal's Triangle
 * Given numRows, generate the first numRows of Pascal's triangle.
 * 
 * For example, given numRows = 5,
 * Return
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 * 
 * @param {number} numRows
 * @return {number[][]}
 * 
 * URL:
 * https://leetcode.com/problems/pascals-triangle/description/
 */
var generate = function(numRows) {
  if (numRows === 0) return [];
  const result = [[1]];

  for (let i = 1 ; i < numRows; i++) {
    const curRow  = [1];
    const prevRow = result[i - 1];

    for (let j = 1 ; j <= i; j++) {
      curRow.push(prevRow[j - 1] + (prevRow[j] ? prevRow[j] : 0));  
    }
    result.push(curRow);
  }

  return result;
};