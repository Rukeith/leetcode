import "math"

func reverse(x int) int {
	var result = 0
	var isNegative = 1

	if x < 0 {
		x *= -1
		isNegative *= -1
	}

	for x != 0 {
		result = result*10 + x%10
		x /= 10
	}

	if math.MinInt32 > result || math.MaxInt32 < result {
		result = 0
	}

	return result * isNegative
}
