class Solution:
    def titleToNumber(self, s: str) -> int:
        cn = 0
        for x in s:
            cn = cn * 26 + 1 + ord(x) - ord('A')

        return cn
