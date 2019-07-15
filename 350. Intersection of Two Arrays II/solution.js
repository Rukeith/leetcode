/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  return nums1.filter(n => {
    const idx = nums2.indexOf(n);
    if (idx !== -1) {
      nums2.splice(idx, 1);
    }
    return idx !== -1;
  });
};
