/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
 * 
 */

var isPalindrome = function (s) {
  let str = s
    .split('')
    .filter(ltr => /[a-zA-Z0-9]/.test(ltr))
    .join('')
    .toLowerCase();

  let x = 0;
  let end = str.length - 1;

  while (x < end) {
    if (str[x] === str[end]) {
      x++;
      end--;
      continue;
    } else {
      return false;
    }
  }
  return true;
};

let s = "P";
let result = isPalindrome(s);
console.log(result);
