class Solution:
    def findRadius(self, houses: List[int], heaters: List[int]) -> int:
        heaters.sort()
        heaters1 = set(heaters)
        rslt = 0

        for h in houses:
            if h not in heaters1:
                pos = bisect.bisect(heaters, h)
                if pos == 0:
                    rslt = max(rslt, heaters[0]-h)
                elif pos == len(heaters):
                    rslt = max(rslt, h-heaters[-1])
                else:
                    rslt = max(rslt, min(h-heaters[pos-1], heaters[pos]-h))
        return rslt
