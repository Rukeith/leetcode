func compress(chars []byte) int {
	p := 0
	for i := 0; i < len(chars); {
		j := i + 1
		for ; j < len(chars); j++ {
			if chars[j] != chars[i] {
				break
			}
		}
		c := j - i
		if c == 1 {
			chars[p] = chars[i]
			p++
			i++
		} else {
			chars[p] = chars[i]
			p++

			pp := j - 1
			for c > 0 {
				r := c % 10
				c /= 10
				chars[pp] = byte('0' + r)
				pp--
			}
			for k := pp + 1; k < j; k++ {
				chars[p] = chars[k]
				p++
			}
			i = j
		}
	}
	return p
}