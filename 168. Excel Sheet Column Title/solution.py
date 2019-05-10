class Solution:
    def convertToTitle(self, n: int) -> str:
        stack = []
        s = ""
        while n != 0:
            if(n > 26):
                a = int(n % 26)
                if(a == 0):
                    stack.append(26)
                    n = n - 1
                else:
                    stack.append(a)
                n = n // 26
            else:
                s += chr(n + 64)
                if(n == 26):
                    break
                n = n // 26
        while stack:
            s += chr(stack.pop() + 64)
        return s
