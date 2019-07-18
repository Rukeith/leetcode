func addStrings(num1 string, num2 string) string {
	str1, str2 := []byte(num1), []byte(num2)
	if len(str1) < len(str2) {
		str1, str2 = str2, str1
	}

	sum := byte(0)
	for i, j := len(str1)-1, len(str2)-1; i >= 0 || j >= 0; i, sum = i-1, sum/10 {
		if j >= 0 {
			sum += str2[j] - '0'
			j--
		}
		sum += str1[i] - '0'
		str1[i] = sum%10 + '0'
	}

	if (sum) != byte(0) {
		str1 = append([]byte{'1'}, str1...)
	}
	return string(str1)
}