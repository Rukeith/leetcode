func canPlaceFlowers(flowerbed []int, n int) bool {
	for i, size := 0, len(flowerbed); i < size; i++ {
		if flowerbed[i] == 0 &&
			((i+1 < size && flowerbed[i+1] == 0) || i+1 >= size) &&
			((i-1 >= 0 && flowerbed[i-1] == 0) || i-1 < 0) {
			flowerbed[i] = 1
			n--

			if n <= 0 {
				return true
			}
		}
	}

	return n <= 0
}