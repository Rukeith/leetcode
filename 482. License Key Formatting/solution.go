func licenseKeyFormatting(S string, K int) string {
	var result []byte
	var temp byte
	var flag int
	for i := 0; i < len(S); i++ {
		if S[i] != '-' {
			temp = S[i]
			if int(S[i])-int('Z') > 0 {
				temp = byte(int(S[i]) - 32)
			}
			result = append(result, temp)
		}
	}
	if len(result) <= K {
		return string(result)
	}
	var len1 int
	if len(result)%K == 0 {
		len1 = len(result)/K - 1
	} else {
		len1 = len(result) / K
	}
	result1 := make([]byte, len1+len(result))
	j := len1 + len(result) - 1
	flag = 0
	for i := len(result) - 1; i > -1; i-- {
		result1[j] = result[i]
		j--
		flag++
		if flag == K && j > 0 {
			result1[j] = '-'
			flag = 0
			j--
		}
	}
	return string(result1)
}