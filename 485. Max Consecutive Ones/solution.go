func findMaxConsecutiveOnes(nums []int) int {
	result := 0
	consecutiveCnt := 0
	for _, num := range nums {
		if num == 1 {
			consecutiveCnt++
		} else {
			consecutiveCnt = 0
		}
		if result < consecutiveCnt {
			result = consecutiveCnt
		}
	}
	return result
}