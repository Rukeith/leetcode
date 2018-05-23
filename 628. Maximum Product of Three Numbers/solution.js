/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let min1 = min2 = Infinity;
  let max1 = max2 = max3 = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (n <= min1) {
      min2 = min1;
      min1 = n;
    } else if (n <= min2) {
      min2 = n;
    } 
    
    if (n >= max1) {
      max3 = max2;
      max2 = max1;
      max1 = n;
    } else if (n >= max2) {
      max3 = max2;
      max2 = n;
    } else if (n >= max3) {
      max3 = n;
    }
  }

  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};