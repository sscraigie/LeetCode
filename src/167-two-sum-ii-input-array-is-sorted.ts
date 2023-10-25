//----------Solution 1----------//
//Speed: 5.07% 1953ms
//Memory: 5.20% 46.58MB

// function twoSum(numbers: number[], target: number): number[] {
//   let numbs = [...numbers];
//   if (numbers.length === 2) return [1, 2];
//   for (let i = 0; i < numbs.length; i++) {
//     let firstValue = numbers.shift() as number;
//     // console.log("firstValue", firstValue);
//     let secondIndex: number = 0;
//     let canSumEqualTarget = numbers.some((value, index, arr) => {
//       if (firstValue + value === target) {
//         // console.log(firstValue, "+", value, "===", target);
//         secondIndex = index + i + 1;
//         return true;
//       }
//     });

//     if (canSumEqualTarget) {
//       return [i + 1, secondIndex + 1];
//     }
//   }
//   return [0, 0]; //Should't happen
// }

//----------Solution 2----------//
//Speed: 14.15% 464ms
//Memory: 92.65% 43.08MB

function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    for (let i2 = i + 1; i2 < numbers.length; i2++) {
      if (numbers[i] + numbers[i2] === target) {
        return [i + 1, i2 + 1];
      }
    }
  }
  return [0, 0]; //Should't happen
}
