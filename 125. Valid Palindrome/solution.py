class Solution:
    def isPalindrome(self, s: str) -> bool:
        chk = [ch.lower() for ch in s if ch.isalnum()]
        return chk == chk[::-1]
