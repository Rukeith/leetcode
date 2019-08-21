class Solution:
    def findRelativeRanks(self, nums: List[int]) -> List[str]:
        T = sorted(nums)[::-1]
        labels = ["Gold Medal", "Silver Medal", "Bronze Medal"] + \
            [str(i) for i in range(4, len(nums) + 1)]
        return map(dict(zip(T, labels)).get, nums)
