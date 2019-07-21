class Solution:
    def numberOfBoomerangs(self, points: List[List[int]]) -> int:
        count = 0
        for x1, y1 in points:
            ref = {}
            for x2, y2 in points:
                dx, dy = x1 - x2, y1 - y2
                d = dx * dx + dy * dy
                if d in ref:
                    count += ref[d]
                    ref[d] += 1
                else:
                    ref[d] = 1
        return count * 2
