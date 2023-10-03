//----------Solution 1----------//
//Speed: 50.37%
//Memory: 16.69%

function jump(nums: number[]): number {
  if (nums.length === 1) return 0;
  let jumps = 0;
  const lastIndex = nums.length - 1;

  const isSumLastIndex = (index: number): boolean => {
    jumps++;
    const sum = nums[index] + index;
    if (sum >= lastIndex) {
      return true;
    }

    const subArray = nums.slice(index + 1, sum + 1).map((value, index) => {
      return value + index;
    });
    const biggestSum = Math.max(...subArray);
    return isSumLastIndex(index + subArray.lastIndexOf(biggestSum) + 1);
  };

  isSumLastIndex(0);
  return jumps;
}

console.log(canJump([2, 3, 1, 1, 4])); // 2
console.log(canJump([0])); // 0
console.log(canJump([2, 0])); //1
console.log(canJump([2, 0, 0])); //1
console.log(canJump([2, 5, 0, 0])); //2
