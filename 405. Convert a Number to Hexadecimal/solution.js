/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (num < 0) num += 0x100000000;
  if (num === 0) return "0";
  const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  const s = [];
  while (num > 0) {
    s.unshift(chars[num % 16]);
    num = Math.floor(num / 16);
  }
  return s.join('');
};