func romanToInt(s string) int {
	var rst int
	var nextI byte

	for i := len(s) - 1; i >= 0; i-- {
		switch s[i] {
		default:
			return -1
		case 'I':
			if nextI == 'V' || nextI == 'X' {
				rst--
			} else {
				rst++
			}
		case 'X':
			if nextI == 'L' || nextI == 'C' {
				rst -= 10
			} else {
				rst += 10
			}
		case 'C':
			if nextI == 'D' || nextI == 'M' {
				rst -= 100
			} else {
				rst += 100
			}
		case 'V':
			rst += 5
		case 'L':
			rst += 50
		case 'D':
			rst += 500
		case 'M':
			rst += 1000
		}

		nextI = s[i]
	}

	return rst
}