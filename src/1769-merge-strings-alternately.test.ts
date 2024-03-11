import { test, expect } from "vitest";

//----------Solution 1----------//
//Speed: 29%
//Memory: 35.87%

// function mergeAlternately(word1: string, word2: string): string {
//   let mergedWord = "";
//   while (word1 != "" && word2 != "") {
//     // console.log("In while:", mergedWord);
//     mergedWord += word1[0];
//     // console.log("Adding word1: ", word1[0]);
//     word1 = word1.slice(1);

//     mergedWord += word2[0];
//     // console.log("Adding word2: ", word2[0]);
//     word2 = word2.slice(1);
//   }
//   //   console.log(mergedWord + word1 + word2);

//   return mergedWord + word1 + word2;
// }

// mergeAlternately("abc", "pqr"); // "apbqcr"
// mergeAlternately("ab", "pqrs"); // "apbqrs"
// mergeAlternately("abcd", "pq"); // "apbqcd"

//----------Solution 2----------//
//Speed: 38.49%
//Memory: 47.51%

// function mergeAlternately(word1: string, word2: string): string {
//   let mergedWord = "";
//   let pointer1 = 0;
//   let pointer2 = 0;

//   while (word1[pointer1] != undefined && word2[pointer2] != undefined) {
//     mergedWord += word1[pointer1];
//     pointer1++;

//     mergedWord += word2[pointer2];
//     pointer2++;
//   }
//   mergedWord += word1[pointer1] ? word1.slice(pointer1) : "";
//   mergedWord += word2[pointer2] ? word2.slice(pointer2) : "";
//   return mergedWord;
// }

//----------Solution 3----------//
//Speed: 69.11%
//Memory: 61.51%

// function mergeAlternately(word1: string, word2: string): string {
//     const shortestString =
//       word1.length < word2.length ? word1.length : word2.length;
//     let mergedWord = "";

//     let pointer1 = 0;
//     let pointer2 = 0;

//     for (let index = 0; index < shortestString; index++) {
//       mergedWord += word1[pointer1];
//       pointer1++;

//       mergedWord += word2[pointer2];
//       pointer2++;
//     }

//     mergedWord += word1[pointer1] ? word1.slice(pointer1) : "";
//     mergedWord += word2[pointer2] ? word2.slice(pointer2) : "";
//     //   console.log(mergedWord);
//     return mergedWord;
//   }

//----------Solution 4----------//
//Speed: 84.14%
//Memory: 85.94%

function mergeAlternately(word1: string, word2: string): string {
  const shortestString =
    word1.length < word2.length ? word1.length : word2.length;
  let mergedWord = "";
  for (let index = 0; index < shortestString; index++) {
    mergedWord += word1[index];
    mergedWord += word2[index];
  }

  mergedWord += word1[shortestString] ? word1.slice(shortestString) : "";
  mergedWord += word2[shortestString] ? word2.slice(shortestString) : "";
  return mergedWord;
}

//----------Test----------//
mergeAlternately("abc", "pqr"); // "apbqcr"
mergeAlternately("ab", "pqrs"); // "apbqrs"
mergeAlternately("abcd", "pq"); // "apbqcd"
mergeAlternately("ab", "pqrs"); // "apbqrs"

test("1769: Merge Strings Alternately", () => {
  expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
  expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
  expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
  expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
});
