func twoSum(numbers []int, target int) []int {
	indexedNumbers := map[int]int{}
	for idx, number := range numbers {
		if value, exists := indexedNumbers[target-number]; exists {
			return []int{value + 1, idx + 1}
		}
		indexedNumbers[number] = idx
	}
	return []int{}
}