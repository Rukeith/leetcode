class Solution:
    def constructRectangle(self, area: int) -> List[int]:
        mid = int(math.sqrt(area))
        while area % mid != 0:
            mid -= 1
        return [int(area / mid), mid]
