/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  const res = [];
  let index = [0, 0];

  for (let i = 0; i < S.length; i++) {
    if (i === S.length - 1 || S[i] !== S[i + 1]) {
      if (i - index[0] >= 2) res.push([index[0] , i]);
      index = [i + 1, i + 1];
    }
  }
  return res;
};