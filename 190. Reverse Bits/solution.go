func reverseBits(num uint32) uint32 {
	rev := uint32(0)
	
	for i := 0; i < 32; i++ {
		pop := num % 2
		num /= 2
		rev = rev * 2 + pop
	}
	return rev
}