/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 * TODO
 */
var divide = function(dividend, divisor) {
  var INT_MIN = Number.MIN_VALUE,
    INT_MAX = Number.MAX_VALUE;
  /******* handling the case of overflow *******/
  if (divisor === 1)
    return dividend;
  if (dividend === INT_MIN && Math.abs(divisor) === 1)
    return INT_MAX;
  /*********************************************/

  var sign = (dividend > 0 ^ divisor > 0) ? -1 : 1;

  var ans = 0;
  var end = Math.abs(dividend);
  var sor = Math.abs(divisor);

  while (end >= sor) {
    var temp = sor;
    var power = 1;
    while ((temp << 1) < end) {
      power <<= 1;
      temp <<= 1;
    }
    ans += power;
    end -= temp;
  }
  return sign * ans;
};