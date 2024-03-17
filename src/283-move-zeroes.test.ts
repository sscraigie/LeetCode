import { test, expect, describe } from "vitest";

//----------Solution 1----------//
// Speed:   84ms    45.30%
// Memory:  56MB    13.05%

// function moveZeroes(nums: number[]): void {
//   let p1 = 0;
//   let p2 = 1;

//   while (p2 < nums.length && p1 < nums.length) {
//     // console.log(p1, p2);
//     // console.log(nums);
//     while (nums[p1] !== 0 && p1 < nums.length) p1++;
//     if (p1 > p2) p2 = p1 + 1;
//     while (nums[p2] === 0 && p2 < nums.length) p2++;

//     if (nums[p1] === 0 && p2 < nums.length) {
//       let temp = nums[p1];
//       nums[p1] = nums[p2];
//       nums[p2] = temp;
//       p2++;
//       p1++;
//       while (nums[p1] !== 0) p1++;
//     }
//   }
// }

// //----------Solution 2----------//
// // Speed:   81ms    56.78%
// // Memory:  55.3Mb  49.77%

// /**
//  Do not return anything, modify nums in-place instead.
//  */
// function moveZeroes(nums: number[]): void {
//   let p1 = 0;
//   let p2 = 1;

//   while (p2 < nums.length && p1 < nums.length) {
//     while (nums[p1] !== 0 && p1 < nums.length) p1++;
//     if (p1 > p2) p2 = p1 + 1;
//     while (nums[p2] === 0 && p2 < nums.length) p2++;

//     if (nums[p1] === 0 && p2 < nums.length) {
//       let temp = nums[p1];
//       nums[p1] = nums[p2];
//       nums[p2] = temp;
//     }
//   }
// }

//----------Solution 2----------//
// Speed:   77ms    71.66%
// Memory:  55.5Mb  25.75%

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  for (let p1 = 0, p2 = 0; p2 < nums.length; p2++) {
    if (nums[p2] != 0) {
      let val = nums[p1];
      nums[p1] = nums[p2];
      nums[p2] = val;
      p1++;
    }
  }
}

describe("283. moveZeroes", () => {
  test("[0,1,0,3,12]", () => {
    let input = [0, 1, 0, 3, 12];
    console.log("hi");
    moveZeroes(input);
    expect(input).toEqual([1, 3, 12, 0, 0]);
  });
  test("[0]", () => {
    let input = [0];
    moveZeroes(input);
    expect(input).toEqual([0]);
  });
  test("[0,0]", () => {
    let input = [0, 0];
    moveZeroes(input);
    expect(input).toEqual([0, 0]);
  });
  test("[2,1]", () => {
    let input = [2, 1];
    moveZeroes(input);
    expect(input).toEqual([2, 1]);
  });
  test("[4,2,4,0,0,3,0,5,1,0]", () => {
    let input = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
    moveZeroes(input);
    expect(input).toEqual([4, 2, 4, 3, 5, 1, 0, 0, 0, 0]);
  });
});
