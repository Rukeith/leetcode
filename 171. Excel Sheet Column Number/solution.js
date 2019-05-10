/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  return s.split('').reduce((acc, c) => acc * 26 + c.charCodeAt(0) - 64, 0);
};
