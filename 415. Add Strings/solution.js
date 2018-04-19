/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let num1Len = num1.length;
  let num2Len = num2.length;
  let maxLen = num1Len > num2Len ? num1Len : num2Len;
  maxLen++;
  let carry = 0;
  let total = '';
  for (let i = 0; i < maxLen; i++) {
    if (i === (maxLen - 1) && carry === 0) continue;
    let pos = num1Len - i - 1;
    const a = 0 > pos ? 0 : (num1.charCodeAt(pos) - 48);
    pos = num2Len - i - 1;
    const b = 0 > pos ? 0 : (num2.charCodeAt(pos) - 48);
    const t =  a + b + carry;
    carry = Math.floor(t / 10);
    total =  (t % 10) + total;
  }
  return total;
};
