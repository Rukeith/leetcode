/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const index = {}
  for (let i = 0; i < nums.length; i++) {
    const matchNum = target - nums[i];
    if (typeof index[matchNum] === 'number') return [index[matchNum], i]
    index[nums[i]] = i;
  }
};
