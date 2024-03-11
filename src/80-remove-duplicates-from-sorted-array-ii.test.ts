import { test, expect } from "vitest";

function removeDuplicates(nums: number[]): number {
  const shiftNums = (index: number) => {
    for (; index < nums.length; index++) {
      if (nums[index + 1] === 10000 || nums[index + 1] === undefined) {
        nums[index] = 10000;
        break;
      } else {
        nums[index] = nums[index + 1];
      }
    }
  };

  for (let i = 0; i < nums.length; ) {
    if (
      nums[i] === nums[i + 1] &&
      nums[i] === nums[i + 2] &&
      nums[i] != 10000
    ) {
      shiftNums(i + 2);
    } else {
      i++;
    }
  }

  return nums.filter((num) => num != 10000).length;
}

test.skip("80: Remove Duplicates from Sorted Array II", () => {
  expect(removeDuplicates([1, 1, 1, 2, 2, 3])).toBe([1, 1, 2, 2, 3]);
  expect(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])).toBe([
    0, 0, 1, 1, 2, 3, 3,
  ]);
});
