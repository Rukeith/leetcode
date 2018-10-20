func reverse(x int) int {
	var result = 0
	var isNegative = 1

	if x < 0 {
		x *= -1
		isNegative *= -1
	}

	for ; x != 0; {
		result = result * 10 + x % 10
		x /= 10
	}

	if math.MinInt32 > result || math.MaxInt32 < result {
		result = 0
	} 
	
	return result * isNegative
}

/**
 * 解題思維：
 * 1. 先判斷是否負值，將負值轉正值
 * 2. 迴圈將參數除 10，從個位數開始倒轉
 * 3. 判斷轉換後的值是否超過範圍，如果沒有超過再將原本的負號加回去
 */