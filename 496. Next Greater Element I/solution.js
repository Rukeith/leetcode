/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const map = {};
  nums2.forEach((num, i) => map[num] = i);
  return nums1.map(num => {
    for (let i = map[num]; i < nums2.length; i++) {
      if (nums2[i] > num) return nums2[i];
    }
    return -1;
  });
};
