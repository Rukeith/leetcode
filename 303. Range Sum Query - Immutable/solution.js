/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
	this.memo = [nums[0]];
	for (let i = 1; i < nums.length; i++) {
		this.memo[i] = nums[i] + this.memo[i - 1];
	}
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
	return i ? this.memo[j] - this.memo[i - 1] : this.memo[j];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */