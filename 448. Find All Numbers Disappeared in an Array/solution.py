class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        rst = []
        setNum = set(nums)
        for i in range(1, len(nums) + 1):
            if i not in setNum:
                rst.append(i)
        return rst
