import { test, expect } from "vitest";

// //----------Attempt  1----------//
// // Speed:   X
// // Memory:  X

//https://leetcode.com/problems/coin-change/?envType=study-plan-v2&envId=top-interview-150

// function coinChange(coins: number[], amount: number): number {
//   if (amount === 0) return 0;
//   coins = coins.sort((a, b) => b - a);
//   console.log(coins);
//   let value = 0;
//   let coinCount = 0;

//   for (let i = 0; i < coins.length; i++) {
//     // console.log({ coins });
//     //Main logic
//     for (let index = 0; index < coins.length; index++) {
//       //   console.log(coins[index]);
//       while (value + coins[index] <= amount) {
//         value += coins[index];
//         coinCount++;
//         if (value === amount) {
//           return coinCount;
//         }
//       }
//     }

//     coins = coins.slice(0, coins.length - 1);
//     value = 0;
//     coinCount = 0;
//   }
//   return -1;
// }

// //----------Solution 1----------//
// // Speed:   85ms       88.71%
// // Memory:  48.12MB    73.12%

function coinChange(coins: number[], amount: number): number {
  let cache = new Array(amount + 1).fill(Infinity);
  cache[0] = 0;
  for (let coin of coins) {
    // console.log({ coin });
    for (let i = coin; i <= amount; i++) {
      if (cache[i] > cache[i - coin] + 1) {
        cache[i] = cache[i - coin] + 1;
        // console.log(i, coin, cache[i], cache[i - coin] + 1);
        // console.log({ dp: cache });
      }
    }
  }

  return cache[amount] == Infinity ? -1 : cache[amount];
}

test("322: Coin Change", () => {
  expect(coinChange([1, 2, 5], 11)).toBe(3);
  expect(coinChange([1, 2, 7], 15)).toBe(3);
  expect(coinChange([1, 7], 5)).toBe(5);
  expect(coinChange([2], 3)).toBe(-1);
  expect(coinChange([1], 0)).toBe(0);
  expect(coinChange([2, 5, 10, 1], 27)).toBe(4);
  expect(coinChange([186, 419, 83, 408], 6249)).toBe(20);
});
