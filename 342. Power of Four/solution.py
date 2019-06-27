class Solution:
    def isPowerOfFour(self, num: int) -> bool:
        """
        Other solution:
        There are 2 criteria for a number to be power of 4:

        is power of 2: n&(n-1) == 0
        even number of "0" in binary format
        For example, 4 in binary is "100".

        100&011 == 0
        there are 2 "0"
        """
        # return num > 0 and num & (num - 1) == 0 and len(bin(num)[3:]) % 2 == 0

        while num >= 4:
            if num % 4 == 0:
                num /= 4
            else:
                return False
        if num == 1:
            return True
        else:
            return False
