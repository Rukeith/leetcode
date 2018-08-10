/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  const strArr = str.split(' ');
  const result = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    if (strArr[i] !== "") {
      result.push(strArr[i]);
    }
  }

  return result.join(' ');
};