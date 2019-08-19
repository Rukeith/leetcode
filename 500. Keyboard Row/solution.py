class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        return filter(re.compile('(?i)([qwertyuiop]*|[asdfghjkl]*|[zxcvbnm]*)$').match, words)
