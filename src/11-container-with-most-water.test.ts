import { test, expect } from "vitest";
//----------Solution 1----------//
//Speed: 74ms 37.38%
//Memory: 51.34MB 50.53%

// function maxArea(height: number[]): number {
//   let p1 = 0;
//   let p2 = height.length - 1;
//   let hightestArea = 0;

//   while (p1 < p2) {
//     let w = p2 - p1;
//     let h;
//     if (height[p1] > height[p2]) {
//       h = height[p2];
//       p2--;
//     } else {
//       h = height[p1];
//       p1++;
//     }
//     const area = h * w;
//     if (hightestArea < area) {
//       hightestArea = area;
//     }
//   }
//   return hightestArea;
// }

//----------Solution 2----------//
//Speed: % MS
//Memory: % MB

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
  let p1 = 0;
  let p2 = height.length - 1;
  let hightestArea = 0;

  while (p1 < p2) {
    let w = p2 - p1;
    let h;
    if (height[p1] > height[p2]) {
      h = height[p2];
      let p2Temp = p2--;
      while (height[p2Temp] < height[p2]) {
        p2Temp--;
      }
    } else {
      h = height[p1];
      let p1Temp = p1++;
      while (height[p1Temp] < height[p1]) {
        p1Temp++;
      }
      p1++;
    }
    const area = h * w;
    if (hightestArea < area) {
      hightestArea = area;
    }
  }
  return hightestArea;
}

test.skip("11: Container With Most Water", () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  expect(maxArea([1, 1])).toBe(1);
  expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  expect(maxArea([1, 2, 1])).toBe(2);
  expect(maxArea([1, 2, 4, 3])).toBe(4);
  expect(maxArea([2, 3, 4, 5, 18, 17, 6])).toBe(17);
});
