/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

//----------Attempt 1----------//

// function getIntersectionNode(
//   headA: ListNode | null,
//   headB: ListNode | null
// ): ListNode | null {
//   let hA = [];
//   let hB = [];

//   let hACopy = headA;
//   let hBCopy = headB;

//   while (hACopy?.next !== null) {
//     hA.push(hACopy!.val);
//     hACopy = hACopy!.next;
//   }

//   while (hBCopy?.next !== null) {
//     hB.push(hBCopy!.val);
//     hBCopy = hBCopy!.next;
//   }

//   console.log("heada", headA);
//   console.log("next", headA.next);
//   console.log("headb", headB);
//   return null;

//}

//----------Solution 1----------//
// Speed:   577ms     9.14%
// Memory:   60.00MB  5.01%

// function getIntersectionNode(
//   headA: ListNode | null,
//   headB: ListNode | null
// ): ListNode | null {

//   if (headA === headB) return headA;

//   let hACopy = headA;
//   let hBCopy = headB;

//   while (hACopy !== undefined) {
//     //   console.log('---checking', hACopy)
//     // let hBLoop = hBCopy;
//     while (hBCopy !== undefined) {
//         // console.log('-', hBCopy)
//       if (hBCopy === hACopy) {
//         return hBCopy;
//       }
//       hBCopy = hBCopy!?.next;
//     }
//     // hBCopyCopy = hBCopy!?.next;
//     hBCopy = headB;
//     hACopy = hACopy!?.next;
//   }

//   return null;
// }

//----------Solution 2----------//
// Speed:    75ms     81.12%
// Memory:   59.24MB  5.01%

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === headB) return headA;

  let aSet = new Set();

  while (headA !== undefined) {
    aSet.add(headA);
    headA = headA!?.next;
  }

  while (headB !== undefined) {
    if (aSet.has(headB)) return headB;
    headB = headB!?.next;
  }

  console.log(aSet);

  return null;
}

// console.log(getIntersectionNode([4, 1, 8, 4, 5], [5, 0, 1, 8, 4, 5])); // 8
// console.log(getIntersectionNode([0, 9, 1, 2, 4], [3, 2, 4])); // 2
// console.log(getIntersectionNode([2, 6, 4], [1, 5])); // null
