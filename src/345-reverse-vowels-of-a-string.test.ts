import { test, expect } from "vitest";

// ----------Solution 1----------//
// Speed: 80ms 36.90%
// Memory: 47.59 MB 99.13%

// function reverseVowels(s: string): string {
//   let sArray = s.split("");
//   let p1 = 0;
//   let p2 = s.length - 1;
//   const VOWELS = "aeoiuAEIOU";

//   while (p1 < p2) {
//     while (!VOWELS.includes(sArray[p1]) && p1 < p2) {
//       p1++;
//     }
//     if (p1 > p2) break;
//     let v1 = sArray[p1];

//     while (!VOWELS.includes(sArray[p2]) && p1 < p2) {
//       p2--;
//     }
//     if (p1 > p2) break;
//     let temp = sArray[p1];
//     sArray[p1] = sArray[p2];
//     sArray[p2] = temp;

//     p1++;
//     p2--;
//   }
//   return sArray.join("");
// }

// ----------Solution 2----------//
// Speed: 66ms 84.50%
// Memory: 83.28MB 83.28%

function reverseVowels(s: string): string {
  let sArray = s.split("");
  let p1 = 0;
  let p2 = s.length - 1;
  const VOWELS = "aeoiuAEIOU";

  while (p1 < p2) {
    if (!VOWELS.includes(sArray[p1])) {
      p1++;
    }
    if (!VOWELS.includes(sArray[p2])) {
      p2--;
    }
    if (VOWELS.includes(sArray[p2]) && VOWELS.includes(sArray[p1])) {
      const temp = sArray[p1];
      sArray[p1] = sArray[p2];
      sArray[p2] = temp;
      p1++;
      p2--;
    }
  }
  return sArray.join("");
}

test("345: Reverse Vowels of a String", () => {
  expect(reverseVowels("hello")).toBe("holle");
  expect(reverseVowels("leetcode")).toBe("leotcede");
  expect(reverseVowels("aA")).toBe("Aa");
});
