/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let i = bits.length - 2;
  if (i >= 0 && bits[i] === 0) return true;

  let len = 0;
  while (i >= 0 && bits[i] > 0) {
    len++;
    i--;
  }
  return len % 2 === 0;
};