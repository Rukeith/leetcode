# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num):

class Solution(object):
  def guessNumber(self, n):
    """
    :type n: int
    :rtype: int
    """
    upper_bound = n
    lower_bound = 1
    while(True):
      cur_guess = (lower_bound + upper_bound) / 2
      res = guess(cur_guess)
      if res == 0: return cur_guess
      elif res == 1: lower_bound = (lower_bound + upper_bound + 1) / 2
      else: upper_bound = (lower_bound + upper_bound - 1) / 2