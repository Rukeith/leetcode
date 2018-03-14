/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target) {
  int _[100001] = {0}, *index_plus_one = _ + 50000;
  for (int i = 0; i < numsSize; i++) {
    int rest = target - nums[i];
    if (index_plus_one[rest]) {
      int *ans = malloc(sizeof(int) * 2);
      ans[0] = i;
      ans[1] = index_plus_one[rest] - 1;
      return ans;
    }
    else
      index_plus_one[nums[i]] = i + 1;
  }
  return NULL;
}