func removeDuplicates(nums []int) int {
	if len(nums) <= 1 {
        return len(nums)
    }

    length := 1
    for k, v := range nums {
        if k > 0 && nums[length - 1] != v {
            nums[length] = v
            length++
        }
    }

    return length
}