class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        """
        3^19 is biggest 3 power number
        """
        return n > 0 and 3**19 % n == 0
