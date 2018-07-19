/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];

  function helper(array, index) {
    res.push(array);
    for (let i = index; i < nums.length; i++) {
      const arr = array.slice(0, array.length);
      arr.push(nums[i]);
      helper(arr, i + 1);
    }
  }
  
  helper([], 0);
  return res;
};