func getRow(rowIndex int) []int {
	if rowIndex == 0 {
		return []int{1}
	}
	lastRow := getRow(rowIndex - 1)
	length := len(lastRow)
	thisRow := make([]int, length+1)
	thisRow[0] = 1
	thisRow[length] = 1
	for i := 1; i < length; i++ {
		thisRow[i] = lastRow[i] + lastRow[i-1]
	}
	return thisRow
}