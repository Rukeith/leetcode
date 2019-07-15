class Solution:
    def reverseVowels(self, s: str) -> str:
        return re.sub('(?i)[aeiou]', lambda m, v=re.findall('(?i)[aeiou]', s): v.pop(), s)

        # vowels = "aeiuoAEIOU"
        # start = 0
        # s = list(s)
        # end = len(s) - 1
        # while start < end:
        #     if s[start] not in vowels:
        #         start += 1
        #     if s[end] not in vowels:
        #         end -= 1
        #     if s[start] in vowels and s[end] in vowels:
        #         s[start], s[end] = s[end], s[start]
        #         start += 1
        #         end -= 1
        # return "".join(s)
