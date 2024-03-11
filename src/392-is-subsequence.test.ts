import { test, expect } from "vitest";

//----------Solution 1----------//
//Speed: 14.70% 65ms
//Memory: 7.28% 44.77MB

// function isSubsequence(s: string, t: string): boolean {
//   while (s.length !== 0 && t.length !== 0) {
//     if (s[0] === t[0]) {
//       s = s.slice(1);
//       t = t.slice(1);
//     } else {
//       t = t.slice(1);
//     }
//   }
//   if (s.length === 0) return true;
//   return false;
// }

//----------Solution 2----------//
//Speed: 5.15% 5327MS
//Memory: 94.6% 42.1MB

// function isSubsequence(s, t) {
//   let regex = new RegExp(s.split("").join(".*"));
//   return regex.test(t);
// }

//----------Solution 3----------//
//Speed: 62ms 25.69%
//Memory: 42.71MB 62.87%

// function isSubsequence(s, t) {
//   if (s === "") return true;
//   let sp = 0;
//   let tp = 0;
//   while (sp < s.length && tp < t.length) {
//     if (s[sp] === t[tp]) {
//       sp++;
//       tp++;
//     } else {
//       tp++;
//     }
//   }
//   if (sp === s.length && s[sp - 1] === t[tp - 1]) return true;
//   return false;
// }

//----------Solution 4----------//
//Speed: 57ms 54.90%
//Memory: 42.15MB 94.06%

function isSubsequence(s: string, t: string): boolean {
  let sp = 0;
  let tp = 0;
  while (sp < s.length && tp < t.length) {
    if (s[sp] === t[tp]) {
      sp++;
      tp++;
    } else {
      tp++;
    }
  }
  return sp === s.length;
}

test("392: Is Subsequence", () => {
  expect(isSubsequence("abc", "ahbgdc")).toBe(true);
  expect(isSubsequence("axc", "ahbgdc")).toBe(false);
});
