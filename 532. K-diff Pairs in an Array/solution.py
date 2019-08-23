class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
        if k == 0:
            dic = collections.Counter(nums).items()
            return len([item for item, count in dic if count > 1])
        elif k < 0 or len(nums) == 0:
            return 0

        count = 0
        nums = set(nums)

        for i in nums:
            if i + k in nums:
                count += 1

        return count

        # c = collections.Counter(nums)
        # return  sum(k > 0 and i + k in c or k == 0 and c[i] > 1 for i in c)
