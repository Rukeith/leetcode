class Solution:
    def findContentChildren(self, chil: List[int], cook: List[int]) -> int:
        i = j = res = 0
        chil.sort(reverse=True)
        cook.sort(reverse=True)

        while i < len(chil) and j < len(cook):
            if cook[j] >= chil[i]:
                res += 1
                j += 1
            i += 1

        return res
