/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  const arr = moves.split('');
  let l = 0, r = 0, u = 0, d = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'L') {
      l++;
    } else if (arr[i] === 'R') {
      r++;
    } else if (arr[i] === 'U') {
      u++;
    } else {
      d++;
    }
  }
  return r === l && d === u;
};