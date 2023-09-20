//----------Solution 1----------//
//Speed: 16.88% 68ms
//Memory: 96.72% 42.7MB

// function maxProfit(prices: number[]): number {
//   let profit = 0;
//   let invested = false;

//   for (let index = 0; index < prices.length; index++) {
//     const nextDayProfit = prices[index] - prices[index + 1];
//     // const dayAfterProfit = prices[index + 1] - prices[index + 2];

//     //Invested
//     if (invested) {
//       if (nextDayProfit < 0) {
//         invested = false;
//       }
//     }
//     //Not Invested
//     else {
//       if (nextDayProfit > 0) {
//         profit = profit + nextDayProfit;
//         invested = true;
//       }
//     }
//   }

//   return profit;
// }

//----------Solution 1----------//
//Speed: 52.36% 60ms
//Memory: 98.07% 42.5MB

function maxProfit(prices: number[]): number {
  let profit = 0;

  for (let index = 0; index < prices.length; index++) {
    if (prices[index + 1] > prices[index]) {
      profit = profit + (prices[index + 1] - prices[index]);
    }
  }
  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
