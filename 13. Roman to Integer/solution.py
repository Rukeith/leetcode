class Solution:
    def romanToInt(self, s: str) -> int:
        """
        :type s: str
        :rtype: int
        """
        roman = {
            'M': 1000,
            'D': 500,
            'C': 100,
            'L': 50,
            'X': 10,
            'V': 5,
            'I': 1
        }

        total = roman[s[-1]]
        for i in range(len(s) - 1):
            if roman[s[i]] < roman[s[i + 1]]:
                total -= roman[s[i]]
            else:
                total += roman[s[i]]
        return total
