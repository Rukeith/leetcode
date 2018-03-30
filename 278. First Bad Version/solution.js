/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let min = 0;
    let max = n;
    while (max > min) {
      let mid = min + Math.floor((max - min) / 2);
      isBadVersion(mid) ? max = mid : min = mid + 1;
    }
    return max;
  };
};