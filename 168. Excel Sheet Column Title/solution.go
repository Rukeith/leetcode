func convertToTitle(n int) string {
	bytes := make([]byte, 0)
	for ; n > 0; n /= 26 {
		if n%26 == 0 {
			bytes = append([]byte{byte('Z')}, bytes...)
			n -= 26
		} else {
			bytes = append([]byte{byte(n%26 + 64)}, bytes...)
			n -= n % 26
		}
	}
	return string(bytes)
}