/*
 Given a list of non negative integers, arrange them such that they form the largest number.
 For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.
 Note: The result may be very large, so you need to return a string instead of an integer.

 https://leetcode.com/problems/largest-number/
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  if (!nums || nums.length === 0)
    return '';

  nums.sort(function(a, b) {
    // [3, 30, 34, 5, 9] -> 9534330
    return (b + '' + a) - (a + '' + b);
  });

  if (nums[0] === 0) {
    return '0';
  }

  return nums.join('');
};