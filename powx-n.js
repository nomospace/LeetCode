/*
 Implement pow(x, n).
 https://leetcode.com/problems/powx-n/
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * TODO
 */
// O(n)
var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  return x * myPow(x, n - 1);
};

// O(logn)
var myPow2 = function(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  return (n % 2 === 0) ? myPow2(x * x, n / 2) : x * myPow2(x * x, n / 2);
};

var myPow3 = function(x, n) {
  /*
   ==> http://blog.csdn.net/fengbingyang/article/details/12236121

   Consider the binary representation of n.
   For example, if it is "10001011", then x^n = x^(1+2+8+128) = x^1 * x^2 * x^8 * x^128.
   Thus, we don't want to loop n times to calculate x^n.
   To speed up, we loop through each bit, if the i-th bit is 1, then we add x^(1 << i) to the result.
   Since (1 << i) is a power of 2, x^(1<<(i+1)) = square(x^(1<<i)).
   The loop executes for a maximum of log(n) times.

   该方法通过扫描n的二进制表示形式里不同位置上的1，来计算x的幂次
   */

  if (n < 0) {
    if (n === Number.MIN_VALUE)
      return 1.0 / (myPow3(x, Number.MAX_VALUE) * x);
    else
      return 1.0 / myPow3(x, -n);
  }
  if (n === 0) {
    return 1.0;
  }
  if (n < 0) {
    return 1.0 / myPow3(x, -n);
  }
  var ans = 1.0;
  for (; n > 0; x *= x, n >>= 1) {
    if (n & 1 > 0) {
      ans *= x;
    }
  }
  return ans;
};

/*
 TODO
 ==> https://leetcode.com/discuss/52800/5-different-choices-when-talk-with-interviewers
 1. nest myPow

 double myPow(double x, int n) {
 if(n<0) return 1/x * myPow(1/x, -(n+1));
 if(n==0) return 1;
 if(n==2) return x*x;
 if(n%2==0) return myPow( myPow(x, n/2), 2);
 else return x*myPow( myPow(x, n/2), 2);
 }
 2. double myPow

 double myPow(double x, int n) {
 if(n==0) return 1;
 double t = myPow(x,n/2);
 if(n%2) return n<0 ? 1/x*t*t : x*t*t;
 else return t*t;
 }
 3. double x

 double myPow(double x, int n) {
 if(n==0) return 1;
 if(n<0){
 n = -n;
 x = 1/x;
 }
 return n%2==0 ? myPow(x*x, n/2) : x*myPow(x*x, n/2);
 }
 4. iterative one

 double myPow(double x, int n) {
 if(n==0) return 1;
 if(n<0) {
 n = -n;
 x = 1/x;
 }
 double ans = 1;
 while(n>0){
 if(n&1) ans *= x;
 x *= x;
 n >>= 1;
 }
 return ans;
 }
 5. bit operation
 class Solution {
 public:
 double pow(double x, int n) {
 if(n<0){
 x = 1.0/x;
 n = -n;
 }
 int unsigned m = n;
 double tbl[32] = {0};
 double result = 1;
 tbl[0] = x;
 for(int i=1;i<32;i++){
 tbl[i] = tbl[i-1]*tbl[i-1];
 }
 for(int i=0;i<32;i++){
 if( m & (0x1<<i) )
 result *= tbl[i];
 }
 return result;
 }
 };
 */