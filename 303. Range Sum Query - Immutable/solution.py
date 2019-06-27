class NumArray:

    def __init__(self, nums: List[int]):
        total = 0
        self._sum = [0]
        for n in nums:
            total += n
            self._sum.append(total)

    def sumRange(self, i: int, j: int) -> int:
        return self._sum[j + 1] - self._sum[i]


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(i,j)
