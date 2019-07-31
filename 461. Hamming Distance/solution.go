func hammingDistance(x int, y int) int {
	hd := 0
	for x != 0 || y != 0 {
		hd += (x & 1) ^ (y & 1)
		x >>= 1
		y >>= 1
	}
	return hd
}