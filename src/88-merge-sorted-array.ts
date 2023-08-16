/**
 Do not return anything, modify nums1 in-place instead.
 */

// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   let nums1ToCheck = nums1.slice(0, m);
//   let result: number[] = [];

//   let x = nums1ToCheck.shift();
//   let y = nums2.shift();

//   const xUndefined = x != undefined && y != undefined;

//   while (nums1ToCheck.length != 0 || nums2.length != 0 || xUndefined) {
//     if (x == undefined || y == undefined) {
//       break;
//     }

//     if (x <= y) {
//       result.push(x);
//       x = nums1ToCheck.shift();
//     } else {
//       result.push(y);
//       y = nums2.shift();
//     }
//   }

//   if (x != undefined) {
//     result = result.concat(x);
//   }
//   if (y != undefined) {
//     result = result.concat(y);
//   }
//   nums1 = result.concat(nums1ToCheck, nums2);
//   console.log(nums1);
// }

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  while (n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1,2,2,3,5,6]
merge([1], 1, [], 0); // [1]
merge([0], 0, [1], 1); // [1]
merge([2, 0], 1, [1], 1); // [1,2]
