import { test, expect } from "vitest";
//----------Solution 1----------//
// Speed:   86ms    75.43%
// Memory:  61MB    52.10%

function productExceptSelf(nums: number[]): number[] {
  const product = nums.reduce((a, v) => a * v);
  return nums.map((v, i) => {
    if (v !== 0) {
      return product / v;
    } else {
      let product = 1;
      for (let index = 0; index < nums.length; index++) {
        if (index !== i) product *= nums[index];
      }
      return product;
    }
  });
}

test("238. Product of Array Except Self", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([-0, 0, 9, -0, 0]);
  expect(productExceptSelf([4, 3, 2, 1, 2])).toEqual([12, 16, 24, 48, 24]);
});
