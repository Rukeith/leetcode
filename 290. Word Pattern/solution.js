/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const mapPat = {};
  const mapStr = {};
  str = str.split(" ");

  if (str.length === pattern.length) {
    for (let i = 0; i < str.length; i++) {
      if (
        mapPat[pattern[i]] === str[i] ||
        (!mapPat[pattern[i]] && !mapStr[str[i]])
      ) {
        mapPat[pattern[i]] = str[i];
        mapStr[str[i]] = pattern[i];
        continue;
      }
      return false;
    }
    return true;
  }
  return false;
};
