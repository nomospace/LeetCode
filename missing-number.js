/*
 Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

 For example,
 Given nums = [0, 1, 3] return 2.

 Note:
 Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

 https://leetcode.com/problems/missing-number/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  /*
   Since the n numbers is from [0, n], we can just add all the numbers from [0, n] together
   and minus the sum of the n-1 numbers in array.
   */
  var len = nums.length, sum = len;
  for (var i = 0; i < len; i++) {
    sum += i - nums[i];
  }
  return sum;
};

var missingNumber2 = function(nums) {
  /*
   The basic idea is to use XOR operation.
   We all know that a^b^b =a, which means two xor operations with the same number will eliminate the number and reveal the original number.
   In this solution, I apply XOR operation to both the index and value of the array.
   In a complete array with no missing numbers, the index and value should be perfectly corresponding( nums[index] = index),
   so in a missing array, what left finally is the missing number.
   */
  var xor = 0, i = 0, len = nums.length;
  for (i; i < len; i++) {
    xor = xor ^ i ^ nums[i];
  }
  return xor ^ i;
};