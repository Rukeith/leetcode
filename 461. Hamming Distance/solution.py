class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        diff = x ^ y
        result = 0

        while diff != 0:
            if diff % 2 != 0:
                result += 1
            diff >>= 1

        return result
