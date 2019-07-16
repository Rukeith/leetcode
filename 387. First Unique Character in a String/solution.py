class Solution:
    def firstUniqChar(self, s: str) -> int:
        if not s:
            return -1

        res = len(s)
        for c in 'abcdefghijklmnopqrstuvwxyz':
            l, r = s.find(c), s.rfind(c)
            if l != -1 and l == r:
                res = min(res, l)

        return res if res != len(s) else -1
