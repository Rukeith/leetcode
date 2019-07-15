import "bytes"

func reverseVowels(s string) string {
	start := 0
	end := len(s) - 1
	sByte := []byte(s)
	set := []byte{'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}

	for start < end {
		f := bytes.IndexByte(set, sByte[start])
		e := bytes.IndexByte(set, sByte[end])
		if f >= 0 && e >= 0 {
			sByte[start], sByte[end] = sByte[end], sByte[start]
			start++
			end--
			continue
		}
		if f < 0 {
			start++
		}
		if e < 0 {
			end--
		}
	}

	return string(sByte)
}