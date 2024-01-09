/** 
 * 
Given a string s consisting of words and spaces, 
return the length of the last word in the string.

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*/
let Input = "   fly me   to   the moon  "
const result = Input.trim().split(/\s+/);
const lastWord = result[result.length - 1]
const length = lastWord.length;


console.log(length.length)