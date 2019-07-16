class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        for char in ransomNote:
            temp = magazine.find(char)
            if temp == -1:
                return False
            else:
                magazine = magazine[0:temp] + magazine[temp + 1:]
        return True
