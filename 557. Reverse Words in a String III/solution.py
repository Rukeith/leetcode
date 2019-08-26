class Solution:
    def reverseWords(self, s: str) -> str:
        length = len(s)
        if length <= 1:
            return s
        result = ' '.join(word for word in s[::-1].split(' ')[::-1])
        return result
