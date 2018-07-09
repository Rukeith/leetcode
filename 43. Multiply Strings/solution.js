/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const num1IsLonger = num1.length > num2.length;
  const base = num1IsLonger ? num1 : num2;
  const added = num1IsLonger ? num2 : num1;
  let maxIndex = base.length + added.length;
  const zeroBase = '0'.charCodeAt(0);
  const result = Array(maxIndex).fill(0);

  for (let i = 0; i < added.length; ++i) {
    for (let j = 0; j < base.length; ++j) {
      let current = i + j;
      let value = result[current] + (base.charCodeAt(base.length - j - 1) - zeroBase) * (added.charCodeAt(added.length - i - 1) - zeroBase);
      result[current] = value % 10;
      while (value > 9) {
        value = result[++current] + (value / 10 | 0);
        result[current] = value % 10;
      }
    }
  }

  while (maxIndex > 1 && result[maxIndex - 1] === 0 ) --maxIndex;
  return result.slice(0, maxIndex).map(v => String.fromCharCode(v + zeroBase)).reverse().join('');
};