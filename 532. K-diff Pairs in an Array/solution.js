/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (!nums || nums.length === 0 || k < 0) return 0;
  const tempObj = {};
  nums.forEach(x => tempObj[x] = (tempObj[x]) ? tempObj[x] + 1 : 1);
  let count = 0;
  Object.keys(tempObj).forEach(key => {
    if (k === 0) {
      if (tempObj[key] >= 2) count++;
    } else {
      if (tempObj[Number(key) + k]) count++;
    }
  });
  return count;
};