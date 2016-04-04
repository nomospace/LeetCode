/*
 You are a professional robber planning to rob houses along a street.
 Each house has a certain amount of money stashed, the only constravar stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken varo on the same night.

 Given a list of non-negative varegers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
//var rob = function(nums) {
//  if (nums.length === 0) {
//    return 0;
//  }
//  if (nums.length === 1) {
//    return nums[0];
//  }
//  var prepare = nums[0];
//  var current = Math.max(nums[0], nums[1]);
//  var result = current;
//  for (var i = 2; i < nums.length; i++) {
//    result = Math.max(current, prepare + nums[i]);
//    prepare = current;
//    current = result;
//  }
//  return result;
//};

var rob = function(nums) {
  var a = 0,
    b = 0;
  for (var i = left; i < right; ++i) {
    var m = a, n = b;
    a = n + nums[i];
    b = Math.max(m, n);
  }
  return Math.max(a, b);
};