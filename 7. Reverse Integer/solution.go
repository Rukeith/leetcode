func reverse(x int) int {
	var res = 0;
	var makeNegative = 1
	if x < 0 {
		x *= -1
		makeNegative *= -1
	}
	for ; x != 0; {
		m := x % 10;
		res = res * 10 + m
		x /= 10
	}

	if math.MinInt32 > res || math.MaxInt32 < res {
		res = 0
	} else {
		res = res * makeNegative
	}
	return res
}