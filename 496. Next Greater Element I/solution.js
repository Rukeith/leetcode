/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  return findNums.map(n => {
    let found = nums.indexOf(n);
    
    if (found !== -1) {
      // find the next greater element's index
      while (nums[found] < n) ++found;
      // -1 if not found
      found = (found >= nums.length) ? -1 : nums[found];
    }

    return found;
  });
};