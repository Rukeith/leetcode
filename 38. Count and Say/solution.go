func countAndSay(n int) string {
	if n == 1 {
		return "1"
	}

	// get last state string
	lastStr := countAndSay(n - 1)
	count := 1
	temp := lastStr[0]
    var buf bytes.Buffer

	for i := 1; i < len(lastStr); i++ {
		if lastStr[i] == temp {
			count++
		} else {
			buf.WriteString(strconv.Itoa(count))
			buf.WriteString(string(temp))
			// reset to initial status
			count = 1
			temp = lastStr[i]
		}
	}

	buf.WriteString(strconv.Itoa(count))
	buf.WriteString(string(temp))
	return buf.String()
}