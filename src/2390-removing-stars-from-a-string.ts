//----------Attempt 1----------//
//Timed Out

// function removeStars(s: string): string {
//   let string = Array.from(s);

//   //   string = string.filter
//   for (let index = 0; index < string.length; ) {
//     if (string[index + 1] === "*") {
//       string.splice(index, 2);
//       index--;
//     } else {
//       index++;
//     }
//   }
//   return string.join("");
// }

//----------Attempt 2----------//
// Speed:
// Memory:

// function removeStars(s: string): string {
//   const removeStar = (str: string) => {
//     str = str.replace(/[^*]\*/g, "");
//     if (str.includes("*")) str = removeStar(str);
//     return str;
//   };

//   return removeStar(s);
// }

//----------Solution 1----------//
// Speed:   182ms       15.05%
// Memory:  98.19MB     5.36%

// function removeStars(s: string): string {
//   let que = s.split("");
//   let result: string[] = [];
//   for (let letter of que) {
//     if (letter === "*") {
//       result.splice(result.length - 1, 1);
//     } else {
//       result.push(letter);
//     }
//   }

//   return result.join("");
// }

//----------Solution 1----------//
// Speed:   101ms       53.06%
// Memory:  67.78MB     54.85%
function removeStars(s: string): string {
  let result: string[] = [];
  for (let letter of s) {
    if (letter === "*") {
      result.pop();
    } else {
      result.push(letter);
    }
  }

  return result.join("");
}

console.log(removeStars("leet**cod*e")); // "lecoe"
console.log(removeStars("erase*****")); // ""
