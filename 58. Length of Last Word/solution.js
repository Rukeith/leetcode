/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const string = s.trim();
  return string.slice(string.lastIndexOf(" ") + 1, string.length).length;
};  