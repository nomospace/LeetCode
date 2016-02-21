/*
 Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 You may assume that the array is non-empty and the majority element always exist in the array.

 https://leetcode.com/problems/majority-element/
 Solution:
 http://images.cnitblog.com/blog/392228/201412/222111454052717.jpg
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var n = nums.length,
    current = 0, count = 0, i;
  // Moore voting algorithm
  // 每次都找出一对不同的元素，从数组中删掉，直到数组为空或只有一种元素。 不难证明，如果存在元素e出现频率超过半数，那么数组中最后剩下的就只有e。
  // http://img.blog.csdn.net/20141004213428369?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYTEzMDczNw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast
  for (i = 0; i < n; i++) {
    if (count === 0) {
      count = 1;
      current = nums[i];
    } else {
      current === nums[i] ? ++count : --count;
    }
  }
  return current;
};