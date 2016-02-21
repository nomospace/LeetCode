/*
 Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

 Solve it without division and in O(n).

 For example, given [1,2,3,4], return [24,12,8,6].

 Follow up:
 Could you solve it with constant space complexity?
 (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

 https://leetcode.com/problems/product-of-array-except-self/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var left = 1, right = 1, i = 0,
    total = nums.length,
    result = [];
  while (i < total) {
    result[i++] = 1;
  }
  for (i = 0; i < total; i++) {
    var ri = total - 1 - i;
    result[i] *= left;
    left *= nums[i];
    result[ri] *= right;
    right *= nums[ri];
  }
  return result;
};

var productExceptSelf2 = function(nums) {
  var product = 1,
    total = nums.length,
    result = [],
    zeroTotal = 0;
  for (var i = 0; i < total; i++) {
    // product of all elements except `0`
    if (nums[i] === 0) {
      zeroTotal += 1;
    } else {
      product *= nums[i];
    }
  }
  for (i = 0; i < total; i++) {
    // 2+ zeros produce [0,0,0..]
    if (zeroTotal > 1) {
      result[i] = 0;
    } else if (zeroTotal === 1) {
      // 1 zero
      result[i] = nums[i] === 0 ? product : 0;
    } else {
      // no zero
      result[i] = product / nums[i];
    }
  }
  return result;
};