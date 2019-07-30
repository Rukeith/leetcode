/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if (!s.length) return false;
  const str = `${s}${s}`;
  return str.substring(1, str.length - 1).includes(s);
};
