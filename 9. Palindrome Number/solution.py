class Solution:
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        return str(x)[::-1] == str(x)

# [::-1] 一種反轉字串的 extended slice syntax
# https://docs.python.org/3.6/whatsnew/2.3.html#extended-slices