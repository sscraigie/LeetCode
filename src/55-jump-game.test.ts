import { test, expect } from "vitest";
//----------Solution 1----------//
//Speed: 52.67% 70ms
//Memory: 10.12% 52.6MB

// function canJump(nums: number[]): boolean {
//     const lastIndex = nums.length - 1;
//     let currIndex;

//     const isSumLastIndex = (index: number): boolean => {
//       const sum = nums[index] + index;
//       if (sum >= lastIndex) return true;
//       if (sum < lastIndex && nums[index] === 0) return false;

//       const subArray = nums.slice(index + 1, sum + 1).map((value, index) => {
//         return value + index;
//       });
//       const biggestSum = Math.max(...subArray);
//       return isSumLastIndex(index + subArray.lastIndexOf(biggestSum) + 1);
//     };

//     for (let index = 0; index < lastIndex; index++) {
//       return isSumLastIndex(index);
//     }

//     return true;
//   }

//----------Solution 2----------//
//Speed: 36.46% 75ms
//Memory: 10.40% 52.4MB
function canJump(nums: number[]): boolean {
  const lastIndex = nums.length - 1;
  let currIndex;

  const isSumLastIndex = (index: number): boolean => {
    const sum = nums[index] + index;
    if (sum >= lastIndex) return true;
    if (sum < lastIndex && nums[index] === 0) return false;

    const subArray = nums.slice(index + 1, sum + 1).map((value, index) => {
      return value + index;
    });
    const biggestSum = Math.max(...subArray);
    return isSumLastIndex(index + subArray.lastIndexOf(biggestSum) + 1);
  };

  return isSumLastIndex(0);
}

test("55: Jump Game", () => {
  expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  expect(canJump([0])).toBe(true);
  expect(canJump([1, 0, 1, 0])).toBe(false);
  expect(canJump([2, 0])).toBe(true);
  expect(canJump([2, 0, 0])).toBe(true);
  expect(canJump([2, 5, 0, 0])).toBe(true);
});
