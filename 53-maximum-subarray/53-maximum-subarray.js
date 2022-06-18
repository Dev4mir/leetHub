/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) return nums;
  let sum = 0;
  let max = Math.max(...nums);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
};
