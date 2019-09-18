class Solution:
    def findLHS(self, nums: List[int]) -> int:
        di, count = collections.Counter(nums), 0
        for key in di:
            if key + 1 in di:
                count = max(count, di[key] + di[key + 1])
        return count
