from collections import Counter


class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        bull = sum(map(operator.eq, secret, guess))
        a = Counter(secret)
        b = Counter(guess)
        cow = sum((a & b).values()) - bull
        return '{}A{}B'.format(bull, cow)
