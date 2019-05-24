class Solution:
    def rob(self, nums: List[int]) -> int:
        prev = cur = 0
        for i in range(len(nums)):
            cur, prev = max(cur, prev + nums[i]), cur
        return cur
