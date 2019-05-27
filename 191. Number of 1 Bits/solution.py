class Solution(object):
    def hammingWeight(self, n):
        """
        :type n: int
        :rtype: int
        """
        return str(bin(n)).count('1')
        # res = 0
        # while n:
        #     res += n % 2
        #     n = n // 2
        # return res
