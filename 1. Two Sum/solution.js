/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var numLength = nums.length, number = [];
  for (var i = 0; i < numLength; i++) {
      for (var j = 0; j < numLength; j++) {
          if (target === (nums[i] + nums[j]) && i !== j) {
              number = [i, j];
              break;
          }
      }
      if (number.length !== 0)
        break;
  }
  
  return number;
};