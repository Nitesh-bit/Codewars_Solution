/*

Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

/* Solution */

function sortArray(array) {
  // Return a sorted array.
  const arr = array.filter((val) => val % 2 !== 0);

  arr.sort(function (a, b) {
    return a - b;
  });
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (num % 2 !== 0) {
      array[i] = arr[j++];
    }
  }

  return array;
}
