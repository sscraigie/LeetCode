// function maxArea(height: number[]): number {
//   // let p1 = 0;
//   // let p2 = height.length - 1;
//   // let hightestArea; //= p1 - p2 * Math.min(height[p1], height[p2]);

//   console.log(`/---${height}---/`);

//   const p1Map = height.map((value, index) => value + height.length - index);
//   console.log("p1Map", p1Map);
//   const p2Map = height.map((value, index) => value + index);
//   console.log("p2Map", p2Map);

//   const p1Index = p1Map.indexOf(Math.max(...p1Map));
//   console.log("max", Math.max(...p1Map));
//   console.log("p1Index", p1Index);
//   const p2Index = p2Map.lastIndexOf(Math.max(...p2Map));
//   console.log("max", Math.max(...p2Map));
//   console.log("p2Index", p2Index);

//   console.log(
//     "result:",
//     (p2Index - p1Index) * Math.min(height[p1Index], height[p2Index])
//   );
//   console.log(
//     `${p2Index} - ${p1Index} * (${height[p1Index]} | ${
//       height[p2Index]
//     })=>${Math.min(height[p1Index], height[p2Index])}))`
//   );
//   return (p2Index - p1Index) * Math.min(height[p1Index], height[p2Index]);
// }

function maxArea(height: number[]): number {
  const indexOfBiggestNumber = height.indexOf(Math.max(...height));
  const scores = height.map((h, i) => {
    let score = Math.abs(indexOfBiggestNumber - i);
    return h + score;
  });
  const sortedScores = scores.sort((a, b) => b - a);

  let h;
  let w;

  let index1 = scores.indexOf(sortedScores[0]);
  let index2 = scores.indexOf(sortedScores[1]);
  if (index1 === indexOfBiggestNumber) {
    w = Math.abs(index2 - indexOfBiggestNumber);
    h = Math.min(height[index2], height[indexOfBiggestNumber]);
    return w * h;
  }
  w = Math.abs(index1 - indexOfBiggestNumber);
  h = Math.min(height[index1], height[indexOfBiggestNumber]);
  return w * h;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
console.log(maxArea([1, 1])); //1
console.log(maxArea([4, 3, 2, 1, 4])); //16
console.log(maxArea([1, 2, 1])); //2
console.log(maxArea([1, 2, 4, 3])); //4
console.log(maxArea([2, 3, 4, 5, 18, 17, 6])); //17
