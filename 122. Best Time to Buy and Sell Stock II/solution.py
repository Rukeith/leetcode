class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        total = 0
        for i in range(0, len(prices) - 1):
            if (prices[i + 1] > prices[i]):
                total += prices[i + 1] - prices[i]
        return total
