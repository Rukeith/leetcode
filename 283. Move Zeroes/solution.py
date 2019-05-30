class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        j = -1
        flag = -1
        for i in range(len(nums)):
            if nums[i] == 0 and flag == -1:
                j = i
                flag = 1
            elif j != -1 and nums[i] != 0:
                nums[j], nums[i] = nums[i], nums[j]
                j += 1
