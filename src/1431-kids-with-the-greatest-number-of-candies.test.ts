import { test, expect } from "vitest";

//----------Solution 1----------//
//Speed: 79.51% 60ms
//Memory: 99.11% 43.6MB

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const result = [];
  const biggestNumber = Math.max(...candies);
  for (let index = 0; index < candies.length; index++) {
    result.push(candies[index] + extraCandies >= biggestNumber);
  }
  return result;
}

test("1431: Kids With the Greatest Number of Candies", () => {
  expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
    true,
    true,
    true,
    false,
    true,
  ]);
  expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([
    true,
    false,
    false,
    false,
    false,
  ]);
  expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
});
