/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  const originalRow = nums.length;
  const originalColumn = nums[0].length;

  if (originalRow * originalColumn !== r * c) {
    return nums;
  }

  const reshaped = [];
  for (let idx = 0; idx < r * c; idx++) {
    const numsRow = Math.floor(idx / originalColumn);
    const numsCol = idx % originalColumn;

    const reshapedRow = Math.floor(idx / c);
    const reshapedCol = idx % c;

    if (reshaped[reshapedRow] === undefined) {
      reshaped[reshapedRow] = [];
    }

    reshaped[reshapedRow][reshapedCol] = nums[numsRow][numsCol];
  }

  return reshaped;
};
