import { test, expect } from "vitest";

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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

test("160: Intersection of Two Linked Lists", () => {
  // Test case 1: No intersection
  const list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(3);

  const list2 = new ListNode(4);
  list2.next = new ListNode(5);
  list2.next.next = new ListNode(6);

  expect(getIntersectionNode(list1, list2)).toBeNull();

  // Test case 2: Intersection at the beginning
  const commonNode = new ListNode(7);
  commonNode.next = new ListNode(8);

  const list3 = new ListNode(9);
  list3.next = new ListNode(10);
  list3.next.next = commonNode;

  const list4 = commonNode;

  expect(getIntersectionNode(list3, list4)).toBe(commonNode);

  // Test case 3: Intersection at the middle
  const list5 = new ListNode(11);
  list5.next = new ListNode(12);
  list5.next.next = commonNode;

  const list6 = new ListNode(13);
  list6.next = commonNode;

  expect(getIntersectionNode(list5, list6)).toBe(commonNode);

  // Test case 4: Intersection at the end
  const list7 = new ListNode(14);
  list7.next = commonNode;

  const list8 = new ListNode(15);
  list8.next = new ListNode(16);
  list8.next.next = commonNode;

  expect(getIntersectionNode(list7, list8)).toBe(commonNode);
});
