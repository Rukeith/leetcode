class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        map1 = {x: i for i, x in enumerate(list1)}
        rsum, rlist = float('inf'), []
        for i, rest in enumerate(list2):
            if i > rsum:
                break
            if rest in map1:
                if i + map1[rest] < rsum:
                    rlist = [rest]
                    rsum = i + map1[rest]
                elif i + map1[rest] == rsum:
                    rlist += [rest]
        return rlist
