func findNthDigit(n int) int {
	base, digit := 1, 1
	for {
		diff := n - (9 * base * digit)
		if diff < 0 {
			j := n % digit
			num := base + (n/digit - 1)
			if j != 0 {
				num++
			}
			if j == 0 {
				return num % 10
			}

			for ; j < digit; j++ {
				num /= 10
			}
			return num % 10
		}
		n, base, digit = diff, base*10, digit+1
	}
}
