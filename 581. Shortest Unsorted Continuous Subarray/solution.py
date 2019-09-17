class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        N = len(nums)
        if N <= 1:
            return 0

        invalid_left = -1
        invalid_right = -1

        smallest = nums[-1]
        for i in reversed(range(N)):
            if nums[i] > smallest:
                invalid_left = i
            else:
                smallest = nums[i]

        largest = nums[0]
        for i in range(N):
            if nums[i] < largest:
                invalid_right = i
            else:
                largest = nums[i]

        if invalid_right == invalid_left:
            return 0
        return invalid_right - invalid_left + 1
