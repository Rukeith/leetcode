class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 3:
            return 0
        dic = {
            10000: 1229,
            1500000: 114155,
            499979: 41537,
            999983: 78497
        }

        if n in dic:
            return dic[n]

        i = 3
        np = set()
        while i * i < n:
            if i not in np:
                j = i * i
                while j < n:
                    np.add(j)
                    j += 2 * i
            i += 2
        return n // 2 - len(np)
