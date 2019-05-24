class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        c_map = {}
        mapped = set()
        for i, c in enumerate(s):
            if c not in c_map:
                if t[i] in mapped:
                    return False
                c_map[c] = t[i]
                mapped.add(t[i])
            else:
                if c_map[c] != t[i]:
                    return False
        return True
