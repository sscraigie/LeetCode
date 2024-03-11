import { test, expect } from "vitest";
//----------Solution 1----------//
//Speed: 50.37%
//Memory: 16.69%

function jump(nums: number[]): number {
  if (nums.length === 1) return 0;
  let jumps = 0;
  const lastIndex = nums.length - 1;

  const isSumLastIndex = (index: number): boolean => {
    jumps++;
    const sum = nums[index] + index;
    if (sum >= lastIndex) {
      return true;
    }

    const subArray = nums.slice(index + 1, sum + 1).map((value, index) => {
      return value + index;
    });
    const biggestSum = Math.max(...subArray);
    return isSumLastIndex(index + subArray.lastIndexOf(biggestSum) + 1);
  };

  isSumLastIndex(0);
  return jumps;
}

test("45: Jump Game II", () => {
  expect(jump([2, 3, 1, 1, 4])).toBe(2);
  expect(jump([0])).toBe(0);
  expect(jump([2, 0])).toBe(1);
  expect(jump([2, 0, 0])).toBe(1);
  expect(jump([2, 5, 0, 0])).toBe(2);
});
