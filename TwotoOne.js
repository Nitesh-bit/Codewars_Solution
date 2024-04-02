/*

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, 
containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

/* Solution */

function longest(s1, s2) {
  let s3 = s1 + s2;
  s3 = s3.split("").sort().join("");

  let uniq = "";

  for (let i = 0; i < s3.length; i++) {
    if (uniq.includes(s3[i]) === false) {
      uniq += s3[i];
    }
  }
  return uniq;
}

// Or
Array.from(new Set(s1 + s2))
  .sort()
  .join("");

//Or
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");
