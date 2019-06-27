class Solution:
    def wordPattern(self, pattern: str, str: str) -> bool:
        s = pattern
        t = str.split()
        return len(set(zip(s, t))) == len(set(s)) == len(set(t)) and len(s) == len(t)
