/*
 Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

 For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
 the contiguous subarray [4,−1,2,1] has the largest sum = 6.

 https://leetcode.com/problems/maximum-subarray/
 */
/**
 * @param {number[]} nums
 * @return {number}
 * TODO
 */
var maxSubArray = function(nums) {
  /*
   Max[i+1] = Max[i] + A[i+1],  if (Max[i] + A[i+1] >0)
   = 0, if(Max[i]+A[i+1] <0)，如果和小于零，A[i+1]必为负数，没必要保留，舍弃掉
   然后从左往右扫描，求取Max数字的最大值即为所求。

   http://www.cnblogs.com/RazerLu/p/3538567.html
   http://blog.csdn.net/linhuanmars/article/details/21314059
   http://blog.nlogn.cn/programming-pearls-the-maximum-sum-of-substring/ !!
   */
  var maxSoFar = nums[0], end = nums[0];
  for (var i = 1; i < nums.length; ++i) {
    end = Math.max(end + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, end);
  }
  return maxSoFar;
};