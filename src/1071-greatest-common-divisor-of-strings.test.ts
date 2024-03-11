import { test, expect } from "vitest";

//---------- First Atempt----------//
// Miss understood the problem

// function gcdOfStrings(str1: string, str2: string): string {
//   const [shortestString, longestString] =
//     str1.length > str2.length ? [str2, str1] : [str1, str2];
//   let gcd = "";
//   for (let index = 0; index < shortestString.length; index++) {
//     if (!longestString.includes(shortestString[index])) {
//       continue;
//     }
//     let subStr = shortestString.substring(index);
//     for (let subStrIndex = 0; subStrIndex < subStr.length; subStrIndex++) {
//       let stringToCheck = subStr.substring(0, subStrIndex + 2);
//       if (!longestString.includes(stringToCheck)) {
//         break;
//       }
//       if (stringToCheck.length > gcd.length) {
//         gcd = stringToCheck;
//       }
//     }
//   }
//   //All the code after this point isn't nessesary. Miss understood the problem
//   /**
//    * Counts the number of times a string occurs in a different string
//    */
//   const charCounter = (char: string, string: string): number => {
//     let count = 0;
//     for (let index = 0; index < string.length; index++) {
//       if (string[index] === char) {
//         count++;
//       }
//     }
//     return count;
//   };
//   const deDuplicateGcd = (gcd: string): string => {
//     const occurrences = charCounter(gcd[0], gcd);
//     if (occurrences === 1) {
//       return gcd;
//     }
//     const potentialPattern = gcd.substring(0, occurrences);
//     let patternCount = 0;
//     for (let index = 0; index < occurrences; index++) {
//       const startOfSubstring = index * potentialPattern.length;
//       if (
//         gcd.substring(startOfSubstring, startOfSubstring + occurrences) ===
//         potentialPattern
//       ) {
//         patternCount++;
//         continue;
//       }
//     }
//     if (patternCount === occurrences) {
//       return potentialPattern;
//     }
//     return gcd;
//   };
//   const result = deDuplicateGcd(gcd);
//   //   console.log(result);
//   return result;
// }

//----------Solution 1----------//
//Speed: 6.09% 226ms
//Memory: 5.18% 55.6 MB

// function gcdOfStrings(str1: string, str2: string): string {
//   const [shortestString, longestString] =
//     str1.length > str2.length ? [str2, str1] : [str1, str2];

//   for (let index = 0; index < shortestString.length; index++) {
//     let patternToCheck = shortestString.substring(
//       0,
//       shortestString.length - index
//     );
//     let regex = new RegExp(patternToCheck, "g");
//     let matchesLongest = [...longestString.matchAll(regex)];
//     let matchesShortest = [...shortestString.matchAll(regex)];

//     if (
//       matchesLongest.length === longestString.length / patternToCheck.length &&
//       matchesShortest.length === shortestString.length / patternToCheck.length
//     ) {
//       //   console.log(patternToCheck);
//       return patternToCheck;
//     }
//   }
//   //   console.log("Nothing");
//   return "";
// }

//----------Solution 2----------//
//Speed: 95.13% 54ms (418.51% faster)
//Memory: 75.34% 44.4MB

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 != str2 + str1) {
    return "";
  }

  const gcd = (a: number, b: number): number => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  return str1.substring(0, gcd(str1.length, str2.length));
}

test.skip("1071: Greatest Common Divisor of Strings", () => {
  expect(gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
  expect(gcdOfStrings("ABABAB", "ABAB")).toBe("ABAB");
  expect(gcdOfStrings("LEET", "CODE")).toBe("");
  expect(
    gcdOfStrings(
      "TAUXXTAUXXTAUXXTAUXXTAUXX", //25
      "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX" //45
    )
  ).toBe("TAUXX");
});
