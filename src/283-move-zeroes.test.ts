import { test, expect } from "vitest";
import { a } from "vitest/dist/suite-UrZdHRff";
//----------Solution 1----------//
// Speed:
// Memory:

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let p1 = 0;
  let p2 = 1;

  while (p2 < nums.length && p1 < nums.length) {
    console.log(p1, p2);
    console.log(nums);
    while (nums[p2] === 0 && p2 < nums.length) p2++;
    while (nums[p1] !== 0 && p1 < nums.length) p1++;

    if (nums[p1] === 0 && p2 < nums.length) {
      let temp = nums[p1];
      nums[p1] = nums[p2];
      nums[p2] = temp;
      p2++;
      p1++;
      while (nums[p1] !== 0) p1++;
    }
  }
}

test("283. moveZeroes", () => {
  let input = [0, 1, 0, 3, 12];
  console.log("hi");
  moveZeroes(input);
  expect(input).toEqual([1, 3, 12, 0, 0]);
});

// [0,1,0,3,12]
// [0]
// [0,0]
// [2,1]
