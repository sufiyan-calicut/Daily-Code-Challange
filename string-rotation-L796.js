/**
 * Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
 
 */

var rotateString = function (s, goal) {
  let str = s.split('');
  let x = 0;
  while (x < str.length) {
    let w = str.splice(0, x + 1);
    str.push(...w);
    str = str.join('');
    if (str == goal) {
      return true;
    } else {
      x++;
      str = s.split('');
    }
  }
  return false;
};
let s = 'abcde';
let goal = 'abced';
let result = rotateString(s, goal);
console.log(result);
