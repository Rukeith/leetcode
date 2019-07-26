import numpy as np
from scipy.spatial.distance import pdist, squareform


class Solution:
    def numberOfBoomerangs(self, points: List[List[int]]) -> int:
        """
        :type points: List[List[int]]
        :rtype: int
        """
        if not points or not points[0]:
            return 0

        def avail_count(x):
            counts = np.unique(x, return_counts=True)[1]
            return int(np.sum(counts*(counts-1)/2))
        return int(2 * sum(map(lambda x: avail_count(x), squareform(pdist(np.array(points))))))


# class Solution:
#     def numberOfBoomerangs(self, points: List[List[int]]) -> int:
#         res = 0
#         for x1, y1 in points:
#             dic = {}
#             for x2, y2 in points:
#                 d1 = x1 - x2
#                 d2 = y1 - y2
#                 dis = d1 * d1 + d2 * d2
#                 if dis in dic:
#                     res += dic[dis]
#                     dic[dis] += 1
#                 else:
#                     dic[dis] = 1

#         return (res * 2)
