/*
 Say you have an array for which the ith element is the price of a given stock on day i.

 If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var result = 0, i = 0,
    low = prices[0],
    total = prices.length;
  for (i; i < total; i++) {
    var price = prices[i];
    if (price < low) {
      low = price;
    } else if (price - low > result) {
      result = price - low;
    }
  }
  return result;
};