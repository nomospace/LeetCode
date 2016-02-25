/*
 The gray code is a binary numeral system where two successive values differ in only one bit.
 Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code.
 A gray code sequence must begin with 0.
 For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:

 00 - 0
 01 - 1
 11 - 3
 10 - 2
 Note:
 For a given n, a gray code sequence is not uniquely defined.
 For example, [0,2,3,1] is also a valid gray code sequence according to the above definition.
 For now, the judge is able to judge based on one instance of gray code sequence. Sorry about that.

 https://leetcode.com/problems/gray-code/
 */
/**
 * @param {number} n
 * @return {number[]}
 * TODO
 */
var grayCode = function(n) {
  /*
   https://segmentfault.com/a/1190000003741403

   复杂度
   时间 O(N) 空间 O(N)

   仔细观察格雷码
   当n=1时

   1
   0
   当n=2时

   00
   01
   11
   10
   当n=3时

   000
   001
   011
   010
   110
   111
   101
   100
   可以发现，n的格雷码，就是n-1的格雷码，再加上它们的逆序前面多一个1。


   复杂度
   时间 O(N) 空间 O(N)

   思路
   工业中的第i个格雷码是这么生成的：(i>>1)^i
   i是指下标，从0开始，对于n的格雷码序列，一共有2^n个数
   */
  var result = [], i, max = 1 << n;
  for (i = 0; i < max; i++) {
    result.push(i ^ i >> 1);
  }
  return result;
};

var grayCode2 = function(n) {
  /*
   My idea is to generate the sequence iteratively.
   For example, when n=3, we can get the result based on n=2. 00,01,11,10 -> (000,001,011,010 ) (110,111,101,100).
   The middle two numbers only differ at their highest bit, while the rest numbers of part two are exactly symmetric of part one.
   It is easy to see its correctness. Code is simple:

   https://leetcode.com/discuss/10068/share-my-solution
   */
  var result = [0], i, j;
  for (i = 0; i < n; i++) {
    var size = result.length;
    for (j = size - 1; j >= 0; j--) {
      result.push(result[j] | 1 << i);
    }
  }
  return result;
};

///*
// The purpose of this function is to convert an unsigned
// binary number to reflected binary Gray code.
//
// The operator >> is shift right. The operator ^ is exclusive or.
// */
//unsigned int binaryToGray(unsigned int num)
//{
//  return (num >> 1) ^ num;
//}
//
///*
// The purpose of this function is to convert a reflected binary
// Gray code number to a binary number.
// */
//unsigned int grayToBinary(unsigned int num)
//{
//  unsigned int mask;
//  for (mask = num >> 1; mask != 0; mask = mask >> 1)
//  {
//    num = num ^ mask;
//  }
//  return num;
//}