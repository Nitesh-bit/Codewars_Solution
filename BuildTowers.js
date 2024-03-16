/*

Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

/* Solution */

function towerBuilder(nFloors) {
  // build here
  const ans = [];
  for (let i = 1; i <= nFloors; i++) {
    let spaces = " ".repeat(nFloors - i);
    let blocks = "*".repeat(2 * i - 1);
    ans.push(spaces + blocks + spaces);
  }

  return ans;
}
