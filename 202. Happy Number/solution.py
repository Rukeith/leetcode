class Solution:
    def isHappy(self, n: 'int') -> 'bool':
        return self.step(n, [])

    def step(self, n, prev) -> bool:
        s = 0
        while n > 0:
            digit = n % 10
            n = n // 10
            s += digit * digit

        if s == 1:
            return True

        if s in prev:
            return False

        return self.step(s, prev + [s])
