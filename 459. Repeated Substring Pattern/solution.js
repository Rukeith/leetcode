/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if (!s.length) return false;
  const s1 = `${s}${s}`;
  const s2 = s1.substring(1, s1.length - 1);
  return s2.includes(s);
};