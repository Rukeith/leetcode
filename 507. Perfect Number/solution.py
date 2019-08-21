class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        prime = [2, 3, 5, 7, 13, 17, 19, 31]
        for p in prime:
            perfect = (1 << (p-1)) * ((1 << p) - 1)
            if perfect == num:
                return True
        return False
