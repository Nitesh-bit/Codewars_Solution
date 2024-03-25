/*

Complete the solution so that it returns true if the first argument(string)
passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

/* Solution */

function solution(str, ending) {
  if (str.length < ending.length) return false;
  let i = str.length - 1,
    j = ending.length - 1;
  let flag = true;
  while (i >= 0 && j >= 0) {
    if (str[i] != ending[j]) {
      flag = false;
      break;
    }
    i--;
    j--;
  }

  return flag;
}
