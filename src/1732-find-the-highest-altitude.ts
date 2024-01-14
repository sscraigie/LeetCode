//----------Solution 2----------//
// Speed:   46 ms   93.45%
// Memory:  43.9 MB  23.62%

function largestAltitude(gain: number[]): number {
  let altitudes = gain.map(
    (g, i) => (gain[i] = g + (i === 0 ? 0 : gain[i - 1]))
  );
  altitudes.push(0);

  return Math.max(...altitudes);
}
