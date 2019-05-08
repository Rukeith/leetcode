class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) < 2:
            return 0

        minE = prices[0]
        maxDiff = 0
        for price in prices:
            if price - minE > maxDiff:
                maxDiff = price-minE
            if price < minE:
                minE = price

        return maxDiff
