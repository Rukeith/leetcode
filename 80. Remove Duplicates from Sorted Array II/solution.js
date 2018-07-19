/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let len2 = 0,
    counter = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[len2] === nums[i] && counter === 1) {
      counter++;
      len2++;
      nums[len2] = nums[i];
    } else if (nums[len2] === nums[i] && counter > 1) {
      counter++;
      nums[len2] = nums[i];
    } else if (nums[len2] !== nums[i]) {
      counter = 1;
      len2++;
      nums[len2] = nums[i];
    }
  }

  return len2 + 1;
};