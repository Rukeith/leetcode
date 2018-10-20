func romanToInt(s string) int {

	mapping := map[string]int {
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000,
	}

	var max int = 0
	var sum int = 0

	for i := len(s) - 1; i >= 0; i-- {
		romanLetter := s[i : i + 1]
		romanValue := mapping[romanLetter]

		if romanValue < max {
			sum -= romanValue
		} else {
			max = romanValue
			sum += romanValue
		}
	}

	return sum
}