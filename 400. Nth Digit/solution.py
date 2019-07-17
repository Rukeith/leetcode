class Solution:
    def findNthDigit(self, n: int) -> int:
        for i in range(9):
            d = 9 * 10 ** i
            if n <= d * (i + 1):
                break
            n -= d * (i + 1)
        n -= 1
        return int(str(10**i + n / (i + 1))[n % (i + 1)])
