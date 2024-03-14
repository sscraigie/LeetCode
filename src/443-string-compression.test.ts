import { test, expect } from "vitest";
//----------Solution 1----------//
// Speed:
// Memory:

function compress(chars: string[]): number {
  const compressed = [chars[0]];
  let count = 1;

  const appendCount = () => {
    if (count !== 1) {
      if (count > 9) {
        const cnt = count.toString().split("");
        console.log(cnt);
        cnt.forEach((v) => compressed.push(v));
        console.log(compressed);
      } else {
        compressed.push(count.toString());
      }
    }
  };

  for (let index = 1; index < chars.length; index++) {
    // console.log(chars[index], count, compressed);
    if (compressed[compressed.length - 1] !== chars[index]) {
      appendCount();
      compressed.push(chars[index]);
      count = 1;
    } else {
      count++;
    }
  }
  appendCount();
  return compressed.length;
}

test("443. String Compression", () => {
  expect(compress(["a", "a", "b", "b", "c", "c", "c"])).toBe(6);
  expect(compress(["a"])).toBe(1);
  expect(
    compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
  ).toBe(4);
  expect("Is Finished").toBe("False");
});
