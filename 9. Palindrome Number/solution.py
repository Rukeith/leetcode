class Solution:
    def isPalindrome(self, x: int) -> bool:
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False
        elif x >= 10:
            return str(x)[::-1] == str(x)
        else:
            return True

# [::-1] 一種反轉字串的 extended slice syntax
# https://docs.python.org/3.6/whatsnew/2.3.html#extended-slices