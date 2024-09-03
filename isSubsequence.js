/**
 * 392. Is Subsequence
Easy
Topics
Companies
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 
 */

var isSubsequence = function (s, t) {
  let pCount = 0;

  let priority = s[pCount];
  for (let i = 0; i < t.length; i++) {
    if (t[i] === priority) {
      pCount++;
      if (pCount <= s.length) {
        priority = s[pCount];
      } else {
        return false;
      }
    }
  }
  return Boolean(pCount == s.length);
};
let s = 'b';
let t = 'c';
console.log(isSubsequence(s, t));
