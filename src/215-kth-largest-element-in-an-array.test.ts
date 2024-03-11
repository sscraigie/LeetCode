import { test, expect } from "vitest";

//----------Solution 1----------//
// Speed:   153ms     47.93%
// Memory:  59.51MB   45.85%

function findKthLargest(nums: number[], k: number): number {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

test("215: Kth Largest Element in an Array", () => {
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
});
