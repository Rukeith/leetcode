/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (!nums || nums.length < 3) return 0;

  let closest = nums[0] + nums[1] + nums[2]; 
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (Math.abs(target - sum) < Math.abs(target - closest)) closest = sum;

      if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      } else {
        return sum;
      }
    }
  }

  return closest;
};