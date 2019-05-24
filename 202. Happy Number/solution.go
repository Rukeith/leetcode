func isHappy(n int) bool {
	appearNum := make(map[int]bool)

	for n > 1 {
		newN := getDigitSquareSum(n)
		if appearNum[newN] {
			return false
		}
		appearNum[newN] = true
		n = getDigitSquareSum(newN)
	}
	if n == 1 {
		return true
	}
	return false
}
func getDigitSquareSum(n int) int {
	sum := 0
	for n > 0 {
		sum += (n - (n/10)*10) * (n - (n/10)*10)
		n = n / 10
	}

	return sum
}