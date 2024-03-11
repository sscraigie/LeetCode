import { test, expect, describe, it } from "vitest";

//----------Solution 1----------//
// Speed:  64ms  34.26%
// Memory: 52.94 31.52%

// function reverseWords(s: string): string {
//   const stringArray = s.split(" ");
//   return stringArray
//     .filter((value) => value != "")
//     .reduce((string, word) => word + " " + string);
// }

//----------Solution 2----------//
// Speed:   41ms        99.66%
// Memory:  52.40MB     73.31%
function reverseWords(s: string): string {
  return s
    .split(" ")
    .reduce((newString, word) => {
      if (word === "") {
        return newString;
      }
      return `${word} ${newString}`;
    })
    .trim();
}

describe("151. Reverse Words in a String", () => {
  it("should reverse the words in the string", () => {
    expect(reverseWords("the sky is blue")).toBe("blue is sky the");
  });
  it("should remove spaces from the beginning and end of the sentence", () => {
    expect(reverseWords("  hello world  ")).toBe("world hello");
  });
  it("should remove spaces from the middle of the sentence", () => {
    expect(reverseWords("a good   example")).toBe("example good a");
  });
});
