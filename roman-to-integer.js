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