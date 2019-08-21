class Solution:
    def fib(self, N: int) -> int:
        dp = [0, 1]
        for i in range(2, N + 1):
            dp.append(dp[i-1] + dp[i-2])

        return dp[N]
