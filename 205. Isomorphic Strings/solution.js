/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const m1 = {},
    m2 = {},
    n = s.length;
  for (let i = 0; i < n; ++i) {
    if (m1[s[i]] !== m2[t[i]]) return false;
    m1[s[i]] = i + 1;
    m2[t[i]] = i + 1;
  }
  return true;
};
