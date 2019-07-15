class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        dic1 = {}
        for i in nums1:
            dic1[i] = dic1.get(i, 0)+1
        out = []
        for i in nums2:
            if i in dic1 and dic1[i] > 0:
                out.append(i)
                dic1[i] -= 1
        return out
