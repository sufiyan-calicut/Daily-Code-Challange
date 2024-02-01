/**
 * You own a Goal Parser that can interpret a string command. The command consists of
 *  an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". 
 * The interpreted strings are then concatenated in the original order.
Given the string command, return the Goal Parser's interpretation of command.

Example 1:

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".
Example 2:

Input: command = "G()()()()(al)"
Output: "Gooooal"
Example 3:

Input: command = "(al)G(al)()()G"
Output: "alGalooG"
 */

var interpret = function (command) {
  let str = command.split('');
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      let x = i + 1;
      let s = '';
      while (str[x] != ')') {
        s += str[x];
        x++;
      }
      if (x - 1 == i) {
        s += 'o';
        i++;
      } else {
        i = x;
      }
      result += s;
    } else {
      result += str[i];
    }
  }
  return result;
};

let command = 'G()()()()(al)';
let expect = 'alGalooG';

let result = interpret(command);
console.log(result);
