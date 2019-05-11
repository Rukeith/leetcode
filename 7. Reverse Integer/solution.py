class Solution:
    def reverse(self, x: int) -> int:
        """
        :type x: int
        :rtype: int
        """
        max = pow(2, 31)
        if x < 0:
            result = -1 * int(str(-x)[::-1])
        else:
            result = int(str(x)[::-1])

        if result > max or result < -max:
            result = 0
        return result

# [::-1] 一種反轉字串的 extended slice syntax
# https://docs.python.org/3.6/whatsnew/2.3.html#extended-slices
