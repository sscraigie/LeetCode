import { test, expect } from "vitest";

//----------Solution 1----------//
// Speed:   148 ms   19.92%
// Memory:  47.6 MB  98.61%

// function findDifference(nums1: number[], nums2: number[]): any {
//   let a = new Set();
//   let b = new Set();

//   nums1.forEach((num) => !nums2.includes(num) && a.add(num));
//   nums2.forEach((num) => !nums1.includes(num) && b.add(num));

//   return [Array.from(a), Array.from(b)];
// }

//----------Solution 2----------//
// Speed:   71 ms   95.42%
// Memory:  49.1 MB  76.49%

function findDifference(nums1: number[], nums2: number[]): any {
  let a = new Set(nums1);
  let b = new Set(nums2);
  let result: number[][] = [[], []];

  a.forEach((num) => !b.has(num) && result[0].push(num));
  b.forEach((num) => !a.has(num) && result[1].push(num));

  return result;
}

test("2215: Find the Difference of Two Arrays", () => {
  expect(findDifference([1, 2, 3], [2, 4, 6])).toEqual([
    [1, 3],
    [4, 6],
  ]);
  expect(findDifference([1, 2, 3], [1, 2, 3])).toEqual([[], []]);
  expect(findDifference([1, 2, 3, 3], [1, 1, 2, 2])).toEqual([[3], []]);
});
