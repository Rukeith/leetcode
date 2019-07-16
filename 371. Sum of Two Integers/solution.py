class Solution:
    def getSum(self, a: int, b: int) -> int:
        if a <= 0 or b <= 0:
            return a + b
        carry = a & b
        result = a ^ b
        while carry:
            carry_t = carry << 1
            carry = carry_t & result
            result ^= carry_t
        return result
