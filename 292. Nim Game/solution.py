class Solution:
    def canWinNim(self, n: int) -> bool:
        return n % 100 % 4 != 0
