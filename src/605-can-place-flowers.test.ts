import { test, expect } from "vitest";

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;
  for (let index = 0; index < flowerbed.length; index++) {
    if (
      flowerbed[index] === 0 &&
      flowerbed[index - 1] != 1 &&
      flowerbed[index + 1] != 1
    ) {
      index++;
      count++;
    }
  }
  // console.log(count >= n);
  return count >= n;
}

test("605: Can Place Flowers", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
  expect(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)).toBe(false);
  expect(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 1)).toBe(false);
  expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toBe(true);
  expect(canPlaceFlowers([1, 0, 1, 0, 0], 1)).toBe(true);
});
