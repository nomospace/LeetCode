/*
 Given a roman numeral, convert it to an integer.
 Input is guaranteed to be within the range from 1 to 3999.

 https://leetcode.com/problems/roman-to-integer/
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // Ⅰ（1）Ⅴ（5）Ⅹ（10）L（50）C（100）D（500）M（1000）
  // rules: 位于大数的后面时就作为加数,位于大数的前面就作为减数
  // eg: Ⅲ=3,Ⅳ=4,Ⅵ=6,ⅩⅨ=19,ⅩⅩ=20,ⅩLⅤ=45,MCMⅩⅩC=1980
  /*
   http://baike.baidu.com/subview/1520140/16247259.htm
   (1)基本数字Ⅰ、X 、C 中的任何一个，自身连用构成数目，或者放在大数的右边连用构成数目，都不能超过三个；放在大数的左边只能用一个。
   (2)不能把基本数字V 、L 、D 中的任何一个作为小数放在大数的左边采用相减的方法构成数目；放在大数的右边采用相加的方式构成数目，只能使用一个。
   (3)V 和X 左边的小数字只能用Ⅰ。
   (4)L 和C 左边的小数字只能用X。
   (5)D 和M 左边的小数字只能用C 。
   (6)在数字上加一横表示这个数字的1000倍。
   */

  if (!s) {
    return 0;
  }

  var len = s.length,
    map = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };

  var result = map[s[len - 1]],
    pivot = result;
  for (var i = len - 2; i >= 0; i--) {
    var curr = map[s[i]];
    if (curr >= pivot) {
      result += curr;
    } else {
      result -= curr;
    }
    pivot = curr;
  }

  return result;
};