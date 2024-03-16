/*

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

/* Solution */

function check(word) {
  for (let i = 0; i < word.length; i++) {
    switch (word[i]) {
      case "1":
        return 1;
      case "2":
        return 2;
      case "3":
        return 3;
      case "4":
        return 4;
      case "5":
        return 5;
      case "6":
        return 6;
      case "7":
        return 7;
      case "8":
        return 8;
      case "9":
        return 9;

      default:
        break;
    }
  }
}
function order(words) {
  // ...
  if (words.length === 0) return "";
  const arrOfWords = words.split(" ");
  let arr = new Array(arrOfWords.length);

  for (const word of arrOfWords) {
    let num = check(word);
    arr[num - 1] = word;
  }

  return arr.join(" ");
}
