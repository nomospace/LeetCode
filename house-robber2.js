/*
 After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention.
 This time, all houses at this place are arranged in a circle.
 That means the first house is the neighbor of the last one.
 Meanwhile, the security system for these houses remain the same as for those in the previous street.

 Given a list of non-negative integers representing the amount of money of each house,
 determine the maximum amount of money you can rob tonight without alerting the police.

 https://leetcode.com/problems/house-robber-ii/
 */
/**
 * @param {number[]} nums
 * @return {number}
 * TODO
 */
var rob = function(nums) {
  var length = nums.length;
  if (length == 1) return nums[0];
  return Math.max(doRob(nums, 0, length - 1), doRob(nums, 1, length));
};

var doRob = function(nums, left, right) {
  var a = 0,
    b = 0;
  for (var i = left; i < right; ++i) {
    var m = a, n = b;
    a = n + nums[i];
    b = Math.max(m, n);
  }
  return Math.max(a, b);
};
