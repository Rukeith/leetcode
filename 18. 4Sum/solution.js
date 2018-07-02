/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var threeSum = function (nums, target, val) {
  const result = [];
  for (let x = 0; x < nums.length; x++) {
    if (x === 0 || (nums[x] !== nums[x - 1])) {
      let low = x + 1;
      let high = nums.length - 1;
      const sum = nums[x];

      while (low < high) {
        if (sum + nums[low] + nums[high] === target) {
          result.push([val, sum, nums[low], nums[high]]);
          while (low < high && nums[low] === nums[low + 1]) low++;
          while (low < high && nums[high] === nums[high - 1]) high--;

          low++;
          high--;
        } else if (sum + nums[low] + nums[high] > target) {
          high--;
        } else {
          low++;
        }
      }
    }
  }

  return result;
};

var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  if (nums.length < 4 || nums[0] * 4 > target || nums[nums.length - 1] * 4 < target) {
    return [];
  }
  const result = [];

  for (let x = 0; x < nums.length - 3; x++) {
    const current = nums[x];
    if ((x == 0 || current !== nums[x - 1]) && (current + nums[nums.length - 1] * 3 >= target) && (current * 4 <= target)) {
      const c = threeSum(nums.slice(x + 1, nums.length), target - current, current);
      result = result.concat(c);
    }
  }
  return result;
};