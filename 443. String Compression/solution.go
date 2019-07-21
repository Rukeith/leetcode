import "strconv"

func compress(chars []byte) int {
	for i := 0; i < len(chars)-1; i++ {
		count := 1
		c := chars[i]
		nextChar := chars[i+1]
		for c == nextChar {
			count++
			if i+count < len(chars) {
				nextChar = chars[i+count]
				continue
			}
			break
		}

		if count > 1 {
			chars = append(chars[:i+1], chars[i+count:]...)
			bts := []byte(strconv.Itoa(count))
			for n := 0; n < len(bts); n++ {
				b := bts[n]
				chars = append(chars, 0)
				copy(chars[i+1:], chars[i:])
				chars[i+1] = b
				i++
			}
		}
	}

	return len(chars)
}