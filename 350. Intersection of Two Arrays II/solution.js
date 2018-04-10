/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const store = nums1.reduce((map, n) => {
    map[n] = (map[n] + 1) || 1;
    return map;
  }, {});
    
  return nums2.filter(n => {
    if (store[n]) {
      store[n]--;
      return true;
    }
    return false;
  });
};