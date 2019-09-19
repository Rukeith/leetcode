class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        flowerbed.insert(0, 0)
        flowerbed.append(0)
        count = 0
        for f in flowerbed:
            if f == 0:
                count += 1
            else:
                count = 0
            if count == 3:
                n -= 1
                count = 1
            if n == 0:
                return True
        return False
