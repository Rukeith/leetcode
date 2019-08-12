class Solution:
    def findComplement(self, num: int) -> int:
        # Get a number of len(num) bits with all 1's
        all_ones = (1 << num.bit_length()) - 1
        # XOR it with original number to get output
        return num ^ all_ones
