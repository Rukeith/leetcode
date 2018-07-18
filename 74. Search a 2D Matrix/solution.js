/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false;

  const m = matrix.length;
  const n = matrix[0].length;

  let row = m - 1;
  let col = 0;

  while (row >= 0 && col < n) {
    if (matrix[row][col] === target) return true;
    if (matrix[row][col] > target) row--;
    else col++;
  }

  return false;
};