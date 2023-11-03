//----------Solution 1----------//
//Speed: % MS
//Memory: % MB

// function isSubsequence(s, t) {
//   let regex = new RegExp(s.split("").join(".*"));
//   return regex.test(t);
// }

// function isSubsequence(s, t) {
//   let sp = 0;
//   let tp = 0;
//   // console.log(tp, t.length - 1);
//   while (tp < t.length - 1 && sp < s.length - 1) {
//     console.log(tp, "<", t.length - 1, "||", sp, "<", s.length - 1);
//     // console.log("Loop: ", sp, tp, s[sp], t[tp]);
//     if (s[sp] === t[tp]) {
//       sp++;
//       tp++;
//     } else {
//       tp++;
//     }
//   }
//   // console.log("got here!");
//   console.log(s[sp], t[tp]);
//   if (sp === s.length - 1) return true;
//   return false;
// }

function isSubsequence(s, t) {
  // if (s === "") return true;
  // console.log(tp, t.length - 1);
  // let x = s;
  // let y = t;
  let sp = 0;
  let tp = 0;
  while (sp < s.length && tp < t.length) {
    // console.log(tp, "<", t.length - 1, "||", sp, "<", s.length - 1);
    // console.log("Loop: ", x, y); // sp, tp, s[sp], t[tp]);
    if (s[sp] === t[tp]) {
      sp++;
      tp++;
    } else {
      tp++;
    }
  }
  // console.log(tp, "<", t.length - 1, "||", sp, "<", s.length - 1);
  // console.log("got here!");
  // console.log(s[sp], t[tp]);
  if (sp === s.length) return true;
  return false;
}

// function isSubsequence(s, t) {
//   let sp = 0;
//   let tp = 0;
//   while (sp !== s.length - 1 && tp !== t.length - 1) {}
// }

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("aaaaaa", "bbaaaa")); // false
console.log(isSubsequence("aaaaaa", "aaaaaa")); // true
console.log(isSubsequence("aaaaaa", "aaaaaa")); // true
console.log("?", isSubsequence("", "asd")); //true
console.log(isSubsequence("asd", "")); //false
console.log(isSubsequence("c", "b")); //false\
