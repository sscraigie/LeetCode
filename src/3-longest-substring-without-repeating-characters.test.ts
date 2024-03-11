import { test, expect } from "vitest";
function lengthOfLongestSubstring(s: string): number {
  let longestSubstring = 0;
  for (let x = 0; x < s.length; x++) {
    let currSubString = "";

    for (let y = 0; y < s.slice(x, s.length).length; y++) {
      let stringLeftOver = s.slice(x, s.length);
      if (currSubString === "") {
        currSubString += stringLeftOver[y];
      } else if (currSubString.includes(stringLeftOver[y])) {
        if (longestSubstring < currSubString.length) {
          longestSubstring = currSubString.length;
        }
        break;
      } else {
        currSubString += stringLeftOver[y];
      }
      if (longestSubstring < currSubString.length) {
        longestSubstring = currSubString.length;
      }
    }
  }
  console.log(longestSubstring);
  return longestSubstring;
}

test("3: Longest Substring Without Repeating Characters", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  expect(lengthOfLongestSubstring("aux")).toBe(3);
  expect(lengthOfLongestSubstring("")).toBe(0);
  expect(lengthOfLongestSubstring("a")).toBe(1);
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  expect(lengthOfLongestSubstring("abcdefg")).toBe(7);
});
