/**
 * 383. Ransom Note
Easy
Topics
Companies
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote
 */

function canConstruct(ransomNote, magazine) {
    // Early exit if ransomNote is longer than magazine
    if (ransomNote.length > magazine.length) return false;
  
    // Create an array to store the letter frequencies
    let letterCount = Array(26).fill(0);
  
    // Increment the counts for each letter in magazine
    for (let letter of magazine) {
      letterCount[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
  
    // Decrement counts for each letter in ransomNote
    for (let letter of ransomNote) {
      let index = letter.charCodeAt(0) - 'a'.charCodeAt(0);
      letterCount[index]--;
      
      // If any letter runs out, return false
      if (letterCount[index] < 0) {
        return false;
      }
    }
  
    return true;
  }
  


let ransomNote = 'bg';
let magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj";
console.log(canConstruct(ransomNote, magazine));
