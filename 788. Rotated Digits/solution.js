/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  let count = 0;
  while (N > 0) {
    if (helper(N)) count++;
    N--;
  }
  return count;
};

const helper = (num) => {
  if (num < 10) {
    if (num === 2 || num === 5 || num === 6 || num === 9) {
      return true;
    }
    return false;
  }
  let flag = false;
  while (num > 0) {
    const rem = num % 10;
    if (rem < 10) {
      if (rem === 2 || rem === 5 || rem === 6 || rem === 9) {
        flag = true;
      } else if( rem === 3 || rem === 4 || rem === 7) {
        return false;
      }
    } 
    num = Math.floor(num / 10);
  }

  return flag || false;
}