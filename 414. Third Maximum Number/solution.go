import "sort"

func thirdMax(nums []int) int {
	m := make(map[int]bool)
	sort.Ints(nums)

	for j := len(nums) - 1; j >= 0; j-- {
		_, ok := m[nums[j]]
		if !ok {
			m[nums[j]] = true
			if len(m) >= 3 {
				return nums[j]
			}
		}
	}
	return nums[len(nums)-1]
}