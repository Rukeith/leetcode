func toHex(num int) string {
	hextable := []string{"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"}

	var x uint
	result := ""
	if num < 0 {
		x = ^uint(0) - uint(-num) + 1
		x &= 0x00000000ffffffff
	} else {
		x = uint(num)
	}

	if x == 0 {
		return "0"
	}
	for x > 0 {
		result = hextable[x%16] + result
		x /= 16
	}

	return result
}