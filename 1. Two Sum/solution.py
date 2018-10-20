class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        dict = {}
        for i in range(0, len(nums)):
            lookingFor = target - nums[i]
            if lookingFor in dict:
                return [dict[lookingFor], i]
            else:
                dict[nums[i]] = i
