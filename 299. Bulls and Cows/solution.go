import "strconv"

func getHint(secret string, guess string) string {
	bullCount, cowCount := 0, 0
	secretPool := make([]int, 10)
	guessPool := make([]int, 10)

	for i := range secret {
		if secret[i] == guess[i] {
			bullCount++
		} else {
			secretPool[secret[i]-'0']++
			guessPool[guess[i]-'0']++
		}
	}

	for i := range secretPool {
		if secretPool[i] > 0 && guessPool[i] > 0 {
			if secretPool[i] >= guessPool[i] {
				cowCount += guessPool[i]
			} else {
				cowCount += secretPool[i]
			}
		}
	}

	answer := strconv.Itoa(bullCount) + "A" + strconv.Itoa(cowCount) + "B"
	return answer
}