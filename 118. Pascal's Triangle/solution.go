func generate(numRows int) [][]int {
	if numRows == 1 {
		return [][]int{{1}}
	}

	var result = [][]int{[]int{1}}

	for i := 1; i <= numRows; i++ {
		var row []int
		for j := 0; j < i; j++ {
			if j == 0 || j == i-1 {
				row = append(row, 1)
			} else {
				row = append(row, result[i-1][j-1]+result[i-1][j])
			}
		}
		result = append(result, row)
	}
	return result[1:]
}