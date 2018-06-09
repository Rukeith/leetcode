class Solution:
  def reverse(self, x):
    """
    :type x: int
    :rtype: int
    """
    if x < 0:
      y = -1 * int(str(-x)[::-1])
    else:
      y = int(str(x)[::-1])
  
    if y > 2**31 or y < -2**31:
      y = 0
    return y

# [::-1] 一種反轉字串的 extended slice syntax
# https://docs.python.org/3.6/whatsnew/2.3.html#extended-slices