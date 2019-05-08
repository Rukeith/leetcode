/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  const result = [[1], [1, 1]];

  while (result.length !== numRows) {
    const currRow = [];
    const lastRow = result[result.length - 1];
    for (let i = 0; i < lastRow.length - 1; i++) {
      currRow.push(lastRow[i] + lastRow[i + 1]);
    }
    result.push([1].concat(currRow).concat([1]));
  }
  return result;
};
