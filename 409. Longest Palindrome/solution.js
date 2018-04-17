/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const counts = {};
  for (let c of s) {
    counts[c] = (counts[c] || 0) + 1;
  }
  let odds = 0;
  for (let c in counts) {
    odds += counts[c] % 2;
  }
  return s.length - odds + !!odds;
};