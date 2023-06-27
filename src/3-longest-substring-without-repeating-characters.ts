function lengthOfLongestSubstring(s: string): number {
  let longestSubstring = 0;
  for (let x = 0; x < s.length; x++) {
    let currSubString = "";

    for (let y = 0; y < s.slice(x, s.length).length; y++) {
      let stringLeftOver = s.slice(x, s.length);
      if (currSubString === "") {
        currSubString += stringLeftOver[y];
      } else if (currSubString.includes(stringLeftOver[y])) {
        if (longestSubstring < currSubString.length) {
          longestSubstring = currSubString.length;
        }
        break;
      } else {
        currSubString += stringLeftOver[y];
      }
      if (longestSubstring < currSubString.length) {
        longestSubstring = currSubString.length;
      }
    }
  }
  console.log(longestSubstring);
  return longestSubstring;
}

// lengthOfLongestSubstring("abcabcbb"); // 3
// lengthOfLongestSubstring("pwwkew"); // 3
lengthOfLongestSubstring("aux"); // 3
