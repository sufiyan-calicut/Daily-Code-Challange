/** 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

let s = 'anagram';
let t = 'nagaram';
let sSorted = s.split('').sort().join('');
let tSorted = t.split('').sort().join('');

if (sSorted === tSorted) {
  console.log('true');
} else {
  console.log('false');
}
