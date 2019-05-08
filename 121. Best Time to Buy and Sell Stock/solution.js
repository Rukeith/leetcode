/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let lowestPrice = prices[0];
  let bestValue = 0;
  prices.forEach(price => {
    lowestPrice = Math.min(price, lowestPrice);
    bestValue = Math.max(price - lowestPrice, bestValue);
  });

  return bestValue;
};
