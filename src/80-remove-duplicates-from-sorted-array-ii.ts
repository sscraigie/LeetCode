function removeDuplicates(nums: number[]): number {
  const shiftNums = (index: number) => {
    for (; index < nums.length; index++) {
      if (nums[index + 1] === 10000 || nums[index + 1] === undefined) {
        nums[index] = 10000;
        break;
      } else {
        nums[index] = nums[index + 1];
      }
    }
  };

  for (let i = 0; i < nums.length; ) {
    if (
      nums[i] === nums[i + 1] &&
      nums[i] === nums[i + 2] &&
      nums[i] != 10000
    ) {
      shiftNums(i + 2);
    } else {
      i++;
    }
  }

  return nums.filter((num) => num != 10000).length;
}
