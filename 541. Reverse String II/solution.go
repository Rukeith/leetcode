func reverseStr(s string, k int) string {
	rs := []byte(s)
	for i := 0; i < len(rs); i += 2 * k {
		x, y := i, i+k-1
		if y > len(rs)-1 {
			y = len(rs) - 1
		}

		for ; x < y; x, y = x+1, y-1 {
			rs[x], rs[y] = rs[y], rs[x]
		}
	}

	return string(rs)
}