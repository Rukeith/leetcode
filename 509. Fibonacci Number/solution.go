func fib(N int) int {
	if N == 0 || N == 1 {
		return N
	}
	dp := make([]int, N+1)
	dp[0] = 0
	dp[1] = 1
	for i := 2; i <= N; i++ {
		dp[i] = dp[i-1] + dp[i-2]
	}
	return dp[N]
}