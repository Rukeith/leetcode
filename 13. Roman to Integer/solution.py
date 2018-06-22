class Solution:
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        hashmap = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        result = hashmap[s[-1]]
        for i in range(len(s) - 2, -1, -1):
            if hashmap[s[i + 1]] > hashmap[s[i]]:
                result -= hashmap[s[i]]
            else:
                result += hashmap[s[i]]
        return result

# range 用法 range(start, stop, step)
# range(0, -10, -1)
# [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]