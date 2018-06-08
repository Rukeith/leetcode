/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  if (left < 1 || right > 10000) return;

  const output = [];
  for (let i = left; i <= right; i++) {
    const stringified = i.toString();
    let noRemainder = false;
    for (let j = 0; j < stringified.length; j++) {
      if (i % Number(stringified[j]) === 0 && stringified[j] !== '0') {
        noRemainder = true;
      } else {
        noRemainder = false
        break;
      }
    }
    if (noRemainder) output.push(i);
  }

  return output;
};