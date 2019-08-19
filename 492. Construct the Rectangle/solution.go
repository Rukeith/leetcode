func constructRectangle(area int) []int {
	var ret []int
	for W := 1; W*W <= area; W++ {
		if area%W == 0 {
			L := area / W

			if W <= L {
				ret = []int{L, W}
			} else {
				return ret
			}
		}
	}

	return ret
}