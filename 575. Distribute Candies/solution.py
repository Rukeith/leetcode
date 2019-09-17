class Solution:
    def distributeCandies(self, candies: List[int]) -> int:
        return min(int(len(candies) / 2), len(set(candies)))
