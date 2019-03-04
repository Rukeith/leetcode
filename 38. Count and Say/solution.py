class Solution:
    def countAndSay(self, n: int) -> str:
        s = '1'
        for _ in range(n - 1):
            cur, temp, cnt = s[0], '', 0
            for d in s:
                if cur == d:
                    cnt += 1
                else:
                    temp += str(cnt) + cur
                    cur = d
                    cnt = 1
            temp += str(cnt) + cur
            s = temp
        return s