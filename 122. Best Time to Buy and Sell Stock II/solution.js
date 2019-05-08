/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) total += prices[i + 1] - prices[i];
  }

  return total;

  // return prices.reduce((total, cur, curIndex, arr) => {
  //   if (arr[curIndex + 1] !== undefined && arr[curIndex + 1] - cur > 0) {
  //     return total + arr[curIndex + 1] - cur;
  //   }
  //   return total;
  // }, 0);
};
