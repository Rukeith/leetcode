import "math"

func isPerfectSquare(num int) bool {
	root := int(math.Sqrt(float64(num)))
	return root*root == num
}