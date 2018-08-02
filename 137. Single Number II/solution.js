/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let one = two = 0;

  for (let i = 0; i < nums.length; i++) {
    one = (one ^ nums[i]) & ~two;
    two = (two ^ nums[i]) & ~one;
  }

  return one;
};