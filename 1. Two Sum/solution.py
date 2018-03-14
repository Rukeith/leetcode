class Solution:
  def twoSum(self, nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    num_dict = {}
    for i, num in enumerate(nums):
      rem = target - num
      if rem in num_dict:
        return [num_dict[rem], i]
      num_dict[num] = i
    return None