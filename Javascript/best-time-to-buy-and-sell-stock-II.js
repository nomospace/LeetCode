/*
 Say you have an array for which the ith element is the price of a given stock on day i.

 Design an algorithm to find the maximum profit.
 You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times).
 However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var result = 0, i = 0,
    total = prices.length;
  for (i; i < total; i++) {
    if (prices[i + 1] - prices[i] > 0) {
      result += prices[i + 1] - prices[i];
    }
  }
  return result;
};