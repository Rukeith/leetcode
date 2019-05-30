func isUgly(num int) bool {
	if num <= 0 {
		return false
	}
	if num == 1 {
		return true
	}
	primes := [3]int{5, 3, 2}
	for _, p := range primes {
		for (num % p) == 0 {
			num /= p
		}
	}
	return num == 1
}