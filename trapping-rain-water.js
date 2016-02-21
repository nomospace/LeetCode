/*
 Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

 For example,
 Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


 The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 In this case, 6 units of rain water (blue section) are being trapped.

 https://leetcode.com/problems/trapping-rain-water/
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var trap = function(A) {
  /*
   两边往中间遍历，记录当前第二高点secHeight，然后利用这个第二高点减去当前历经的柱子，剩下就装水容量了。
   为什么是第二高点？因为两边比较，最高的点不用动，只移动第二高点。
   */
  var n = A.length,
    secHeight = 0,
    left = 0,
    right = n - 1,
    water = 0;

  while (left < right) {
    if (A[left] < A[right]) {
      secHeight = Math.max(A[left], secHeight);
      water += secHeight - A[left];
      left++;
    } else {
      secHeight = Math.max(A[right], secHeight);
      water += secHeight - A[right];
      right--;
    }
  }

  return water;
};

var trap2 = function(A) {
  /*
   A Simple Solution is to traverse every array element and find the highest bars on left and right sides.
   Take the smaller of two heights. The difference between smaller height and height of current element is the amount of water that can be stored in this array element.
   Time complexity of this solution is O(n2).

   An Efficient Solution is to pre-compute highest bar on left and right of every bar in O(n) time.
   Then use these pre-computed values to find the amount of water in every array element.

   http://www.geeksforgeeks.org/trapping-rain-water/
   */

  var n = A.length,
    left = [],
  // left[i] contains height of tallest bar to the
  // left of i'th bar including itself
    right = [],
  // Right [i] contains height of tallest bar to
  // the right of ith bar including itself
    water = 0;

  A.forEach(function(h, i) {
    left[i] = 0;
    right[i] = 0;
  });

  // Fill left array
  left[0] = A[0];
  for (var i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], A[i]);
  }

  // Fill right array
  right[n - 1] = A[n - 1];
  for (i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], A[i]);
    // Calculate the accumulated water element simultaneously by element
    // consider the amount of water on i'th bar, the
    // amount of water accumulated on this particular
    // bar will be equal to Math.min(left[i], right[i]) - arr[i] .
    water += Math.min(left[i], right[i]) - A[i];
  }

  return water;
};