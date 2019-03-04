func searchInsert(nums []int, target int) int {
	left, right := 0, len(nums) - 1
    mid := right / 2

	for left + 1 < right {
		if nums[mid] == target {
			right = mid
		} else if nums[mid] < target {
			left = mid
		} else {
			right = mid
		}
		mid = (right + left) / 2
    }

	if nums[left] >= target {
		return left
	}
	if nums[right] >= target {
		return right
	}
	return right + 1
}