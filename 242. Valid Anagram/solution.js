/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const chrs = new Array(128).fill(0);
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    chrs[s.charCodeAt(i)]++;
  }
  for (let i = 0; i < t.length; i++) {
    if (chrs[t.charCodeAt(i)]-- <= 0) {
      return false;
    }
  }
  return true;
};