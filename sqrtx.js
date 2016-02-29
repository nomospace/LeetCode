/*
 Implement int sqrt(int x).
 Compute and return the square root of x.

 https://leetcode.com/problems/sqrtx/
 */
/**
 * @param {number} x
 * @return {number}
 * TODO
 */
var mySqrt = function(x) {
  // Solve this problem with Binary Search
  if (x <= 0) {
    return 0;
  }
  var left = 1, right = Number.MAX_VALUE;
  while (true) {
    var mid = left + (right - left) / 2;
    if (mid > x / mid) {
      right = mid - 1;
    } else {
      if (mid + 1 > x / (mid + 1))
        return mid;
      left = mid + 1;
    }
  }
};

// Almost the same as the first one
var mySqrt2 = function(x) {
  var begin = 0;
  var end = (x + 1) / 2;
  var mid;
  var tmp;
  while (begin < end) {
    mid = begin + (end - begin) / 2;
    tmp = mid * mid;
    if (tmp === x)return mid;
    else if (tmp < x) begin = mid + 1;
    else end = mid - 1;
  }
  tmp = end * end;
  if (tmp > x)
    return end - 1;
  else
    return end;
};

// https://leetcode.com/discuss/8897/share-my-o-log-n-solution-using-bit-manipulation
// O(log n) Solution using bit manipulation
var mySqrt3 = function(x) {
  var ans = 0;
  var bit = 1 << 16;
  while (bit > 0) {
    ans |= bit;
    if (ans * ans > x) {
      ans ^= bit;
    }
    bit >>= 1;
  }
  return Math.floor(ans);
};