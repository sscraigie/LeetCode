//----------Solution 1----------//
//Speed: 79.51% 60ms
//Memory: 99.11% 43.6MB

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const result = [];
  const biggestNumber = Math.max(...candies);
  for (let index = 0; index < candies.length; index++) {
    result.push(candies[index] + extraCandies >= biggestNumber);
  }
  return result;
}
