class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        inputHash, strStart, firstPsum, currHash, res = 0, 0, 0, 0, []
        if len(s) < len(p):
            return []

        for subStr in p:
            inputHash += hash(subStr)
        for i in range(len(p)):
            firstPsum += hash(s[i])
            if firstPsum == inputHash:
                res.append(0)
        for i in range(1, len(s) - len(p) + 1):
            currHash = firstPsum - hash(s[strStart]) + hash(s[i + len(p) - 1])
            if currHash == inputHash:
                res.append(i)
            firstPsum = currHash
            strStart += 1
        return res
