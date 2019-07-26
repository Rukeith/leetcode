/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i + 1 && nums[i] !== nums[nums[i] - 1]) {
      let tmp = nums[i];
      nums[i] = nums[tmp - 1];
      nums[tmp - 1] = tmp;
    }
  }

  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      ans.push(i + 1);
    }
  }

  return ans;
};
