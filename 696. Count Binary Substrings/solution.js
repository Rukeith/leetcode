/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let curL = 1;
  let prevL = 0;
  let cnt = 0;
  const len =s.length; 
  for (let i = 1; len > i; i++) {
    if (s[i] === s[i-1]) {
      curL++;
    } else {
      prevL = curL;
      curL = 1;
    }
    if (prevL >= curL) cnt++;
  }
  return cnt;
};