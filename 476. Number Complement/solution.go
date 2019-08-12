func findComplement(num int) int {
	var mask int = ^0
	for num&mask > 0 {
		mask <<= 1
	}
	return ^mask ^ num
}