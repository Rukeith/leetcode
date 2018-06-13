/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  return S.split('').filter(i => J.indexOf(i) !== -1).length;
};