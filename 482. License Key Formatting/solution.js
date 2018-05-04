/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  const reStructStr = S.split('-').join('').toUpperCase();
  let result = '';
  let i;
  for (i = reStructStr.length; i - K >= 1; i-=K) {
    result = `-${reStructStr.substring(i - K, i)}${result}`;
  }
  return `${reStructStr.substring(0, i)}${result}`;
};