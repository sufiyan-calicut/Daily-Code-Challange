/**
 * 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 
*/

var isValid = function (s) {
  const openedBrackets = ['[', '{', '('];
  const stack = [];
  s = s.split('');

  for (let i = 0; i < s.length; i++) {
    let bracket = s[i];
    if (openedBrackets.includes(bracket)) {
      stack.push(bracket);
    } else if (stack.length) {
      let char = stack.pop();
      if (
        (bracket === ']' && char !== '[') ||
        (bracket === '}' && char !== '{') ||
        (bracket === ')' && char !== '(')
      ) {
        return false;
      }
    } else if (!stack.length) {
      return false;
    }
  }

  return !stack.length;
};
let s = '()';
let result = isValid(s);
console.log(result);
