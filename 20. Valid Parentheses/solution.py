class Solution:
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if s == '':
            return True

        arr = []
        dic = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        for char in s:
            if char in dic.values():
                arr.append(char)
            elif char in dic.keys():
                if not arr or dic[char] != arr.pop():
                    return False
            else:
                return False
        return not arr