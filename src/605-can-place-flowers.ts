function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;
  for (let index = 0; index < flowerbed.length; index++) {
    if (
      flowerbed[index] === 0 &&
      flowerbed[index - 1] != 1 &&
      flowerbed[index + 1] != 1
    ) {
      index++;
      count++;
    }
  }
  // console.log(count >= n);
  return count >= n;
}

canPlaceFlowers([1, 0, 0, 0, 1], 1); // true
canPlaceFlowers([1, 0, 0, 0, 1], 2); // false
canPlaceFlowers([1, 0, 0, 0, 0, 1], 2); //false
canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 1); //false
canPlaceFlowers([0, 0, 1, 0, 1], 1); // true
canPlaceFlowers([1, 0, 1, 0, 0], 1); // true
