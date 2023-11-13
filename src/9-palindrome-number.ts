function isPalindrome(x: number): boolean {
  const str = x.toString();
  const reversStr = str.split("").reverse().join("");
  return str === reversStr;
}
