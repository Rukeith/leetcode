/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0;
  let ten = 0;
  let twenty = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) five++;
    else {
      five--;
      if (bills[i] === 10) ten++;
      else { 
        twenty++;
        (ten > 0) ? ten-- : five -=2;
      }
    }
    if (five < 0) return false;
  }
  return true;
};