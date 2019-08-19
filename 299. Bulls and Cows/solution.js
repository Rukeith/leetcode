/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let a = 0;
  let b = 0;
  const length = guess.length;
  const secs = new Array(10).fill(0);

  for (let i = 0; i < length; i++) {
    const s = secret[i];
    const g = guess[i];
    if (g === s) {
      a++;
    } else {
      if (secs[s]++ < 0) b++;
      if (secs[g]-- > 0) b++;
    }
  }

  return `${a}A${b}B`;
};
