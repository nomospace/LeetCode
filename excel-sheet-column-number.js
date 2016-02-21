/*
 Related to question Excel Sheet Column Title

 Given a column title as appear in an Excel sheet, return its corresponding column number.

 For example:

 A -> 1
 B -> 2
 C -> 3
 ...
 Z -> 26
 AA -> 27
 AB -> 28

 https://leetcode.com/problems/excel-sheet-column-number/
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var array = s.split(''),
    n = array.length,
    result = 0, i;
  for (i = 0; i < n; i++) {
    var delta = array[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    result += delta * Math.pow(26, n - i - 1);
  }
  return result;
};

