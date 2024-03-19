/*

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

/* Solution */

function comp(a, b) {
  if (!a || !b) {
    return false;
  }

  const map = new Map();

  // Count the occurrences of each element in b
  for (let num of b) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Check if each square of an element in a is in the map
  for (let num of a) {
    const square = num * num;
    if (!map.has(square) || map.get(square) === 0) {
      return false;
    }
    // Decrement the count of the square in the map
    map.set(square, map.get(square) - 1);
  }

  // Check if there are any remaining elements in map
  for (let count of map.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}
