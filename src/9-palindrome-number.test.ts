import { test, expect } from "vitest";

function isPalindrome(x: number): boolean {
  const str = x.toString();
  const reversStr = str.split("").reverse().join("");
  return str === reversStr;
}
test("isPalindrome should return true for palindromic numbers", () => {
  expect(isPalindrome(121)).toBe(true);
  expect(isPalindrome(12321)).toBe(true);
  expect(isPalindrome(1221)).toBe(true);
});

test("isPalindrome should return false for non-palindromic numbers", () => {
  expect(isPalindrome(123)).toBe(false);
  expect(isPalindrome(12345)).toBe(false);
});
