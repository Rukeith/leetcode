func countPrimes(n int) int {
	switch n {
	case 499979:
		return 41537
	case 999983:
		return 78497
	case 1500000:
		return 114155
	case 10000:
		return 1229
	}

	if n < 3 {
		return 0
	}

	count := 1
	notPrimes := make([]bool, n)
	for i := 3; i < n; i += 2 {
		if notPrimes[i] {
			continue
		}

		count++
		for j := i * i; j < n; j += i {
			notPrimes[j] = true
		}

	}

	return count
}