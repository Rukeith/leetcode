class Solution:
    def arrangeCoins(self, n: int) -> int:
        st = int(math.sqrt(2 * n))

        for i in range(st, -1, -1):
            if (1 + i) * i // 2 <= n:
                return i
