/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  const getBitAmount = n => {
    let ans = 0;
    while (n > 0) {
      ans += n % 2;
      n = Math.floor(n / 2);
    }
    return ans;
  };

  const bitList = {};
  for (let b = 0; b < 60; b++) {
    const a = getBitAmount(b);
    if (!bitList[a]) {
      bitList[a] = [];
    }
    bitList[a].push(b);
  }

  const ans = [];

  for (let i = 0; i <= num; i++) {
    if (!(bitList[i] && bitList[num - i])) continue;
    bitList[i].map(h => {
      if (h < 12) {
        const hStr = `${h}:`;
        bitList[num - i].map(m => {
          if (m < 60) {
            ans.push(hStr + (m < 10 ? "0" : "") + m);
          }
        });
      }
    });
  }

  return ans;
};
