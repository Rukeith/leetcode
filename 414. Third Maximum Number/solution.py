class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        if len(nums) < 3:
            return max(nums)
        s = sorted(set(nums))
        return s[-3] if len(s) > 2 else s[-1]
