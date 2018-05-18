/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  let maxRow = m;
  let maxCol = n;

  for (let i = 0; i < ops.length; i++) {
    maxRow = Math.min(maxRow, ops[i][0]);
    maxCol = Math.min(maxCol, ops[i][1]);
  }

  return maxRow * maxCol;
};