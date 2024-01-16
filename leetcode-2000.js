/** 
Input: word = "xyxzxe", ch = "z"
Output: "zxyxxe"
*/
let word = 'xyxzxe';
let ch = 'z';
let output = 'zxyxxe';

let index = word.indexOf(ch);
if (index === -1) return word;

let result = word
  .slice(0, index + 1)
  .split('')
  .reverse('')
  .join('');

word = result + word.slice(index + 1);

console.log(word);
