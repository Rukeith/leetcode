class Solution:
    def addDigits(self, num: int) -> int:
        return num and (num - 1) % 9 + 1
