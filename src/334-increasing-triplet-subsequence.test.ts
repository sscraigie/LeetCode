import { test, expect } from "vitest";
//----------Solution 1----------//
// Speed:   timeout
// Memory:

// function increasingTriplet(nums: number[]): boolean {
//   for (let p1 = 0; p1 < nums.length - 2; p1++) {
//     for (let p2 = p1 + 1; p2 < nums.length; p2++) {
//       if (nums[p1] < nums[p2]) {
//         for (let p3 = p2 + 1; p3 < nums.length; p3++) {
//           if (nums[p2] < nums[p3]) return true;
//         }
//       }
//     }
//   }
//   return false;
// }

//----------Solution 1----------//
// Speed:
// Memory:

function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] <= first) {
      first = nums[index];
    } else if (nums[index] <= second) {
      second = nums[index];
    } else {
      return true;
    }
  }
  return false;
}

test("334. Increasing Triplet Subsequence", () => {
  expect(increasingTriplet([1, 2, 3, 4, 5])).toBe(true);
  expect(increasingTriplet([5, 4, 3, 2, 1])).toBe(false);
  expect(increasingTriplet([1, 2, 3, 1, 2, 1])).toBe(true);
  expect(increasingTriplet([20, 100, 10, 12, 5, 13])).toBe(true);
});
