/*

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.

/* Solution */

function multiply(num) {
  let mul = 1;

  while (num) {
    mul *= num % 10;
    num = Math.floor(num / 10);
  }
  return mul;
}

function persistence(num) {
  let ans = 0;

  while (num) {
    if (Math.floor(num / 10) !== 0) {
      num = multiply(num);
      ans++;
    } else break;
  }

  return ans;
}

/* Solution 2 */

function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}
