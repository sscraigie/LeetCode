//----------Solution 1----------//
//Speed: 54.32% 70ms
//Memory: 93.41% 52.6MB

// function isPalindrome(s: string): boolean {
//   const string = s.replace(/[.,\/#!$%\^&\*;:{}=@\-_` ~()]/g, "").toLowerCase();
//   if (string.length < 2) return true;
//   let p1 = 0;
//   let p2 = string.length - 1;

//   while (p1 < p2) {
//     if (string[p1] != string[p2]) {
//       return false;
//     }
//     p1++;
//     p2--;
//   }
//   return true;
// }

//----------Solution 2----------//
//Speed: 87.97% 59ms
//Memory: 88.79% 44.74MB

function isPalindrome(s: string): boolean {
  const string = s.replace(/[\W_]/g, "").toLowerCase();
  if (string.length < 2) return true;
  let p1 = 0;
  let p2 = string.length - 1;

  while (p1 < p2) {
    if (string[p1] != string[p2]) {
      return false;
    }
    p1++;
    p2--;
  }
  return true;
}

isPalindrome("A man, a plan, a canal: Panama"); // true
isPalindrome("race a car"); // false
isPalindrome(" "); //true
