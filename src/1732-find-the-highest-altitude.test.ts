import { test, expect } from "vitest";

//----------Solution 2----------//
// Speed:   46 ms   93.45%
// Memory:  43.9 MB  23.62%

function largestAltitude(gain: number[]): number {
  let altitudes = gain.map(
    (g, i) => (gain[i] = g + (i === 0 ? 0 : gain[i - 1]))
  );
  altitudes.push(0);

  return Math.max(...altitudes);
}

test("1732: Find the Highest Altitude", () => {
  expect(largestAltitude([-5, 1, 5, 0, -7])).toBe(1);
  expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toBe(0);
  expect(largestAltitude([1])).toBe(1);
  expect(largestAltitude([-1])).toBe(0);
});
