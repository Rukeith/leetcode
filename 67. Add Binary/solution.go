func addBinary(a string, b string) string {
	iA := len(a) - 1
	iB := len(b) - 1
	sum := 0
	ret := make([]byte, max(len(a), len(b))+1)
	idx := len(ret) - 1
	for iA >= 0 || iB >= 0 {
		if iA >= 0 {
			sum += int(a[iA] - '0')
		}

		if iB >= 0 {
			sum += int(b[iB] - '0')
		}

		ret[idx] = byte(sum&1) + '0'
		sum = sum >> 1
		idx--
		iA--
		iB--
	}

	if sum > 0 {
		ret[0] = '1'
		return string(ret)
	}

	return string(ret[1:])
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}