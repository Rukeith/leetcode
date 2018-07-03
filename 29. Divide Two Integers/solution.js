/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (divisor === 0) return 2, 147, 483, 647;

  let flag = 0;
  if (dividend < 0 && divisor < 0) flag = 2;
  else if (dividend > 0 && divisor > 0) flag = 0;
  else if (dividend > 0 && divisor < 0) flag = 3;
  else flag = 1;

  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);

  if (dividend === 0) return 0;

  if (absDivisor === absDividend)
    if ((flag & 1) !== 0) return -1;
    else return 1;

  if (absDividend < absDivisor) return 0;

  let curDivisor = divisor;
  if (divisor > 0) curDivisor = -divisor;

  let curDividend = dividend;
  if (dividend > 0) curDividend = -dividend;

  let factor = -1; //(divisor > 0 ? 1 : -1);

  while (true) {
    if ((curDividend - curDivisor >= 0) || curDivisor <= -0x40000001) {
      if (factor === -2147483648 && (flag === 0 || flag === 2)) return 2147483647; //overflow

      if ((flag === 3 || flag === 1) && dividend - curDivisor === 0) return factor;
      else if (flag === 0 && dividend + curDivisor === 0) return -factor;
      else if (flag === 2 && dividend - curDivisor === 0) return -factor;

      let fixedAnswer = (factor >> 1)
      if (flag === 0 || flag === 2) fixedAnswer = -fixedAnswer;

      let diff = curDivisor >> 1;

      if (factor === -1) diff = curDivisor;

      if (flag === 1 || flag === 2) {
        return fixedAnswer + divide(dividend - diff, divisor);
      } else {
        return fixedAnswer + divide(dividend + diff, divisor);
      }
    }

    curDivisor = curDivisor << 1;
    factor = factor << 1;
  }
};