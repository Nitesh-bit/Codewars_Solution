/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

/* Solution */

function isIsogram(str) {
  if (str.length === 0) return true;

  str = str.toLowerCase();

  const map = new Map();

  for (const char of str) {
    if (map.has(char)) {
      return false;
    }

    map.set(char, true);
  }

  return true;
}
