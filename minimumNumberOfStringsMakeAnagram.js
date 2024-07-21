/**
 * 2186. Minimum Number of Steps to Make Two Strings Anagram II
Medium
Topics
Companies
Hint
You are given two strings s and t. In one step, you can append any character to either s or t.

Return the minimum number of steps to make s and t anagrams of each other.

An anagram of a string is a string that contains the same characters with a different (or the same) ordering.

 

Example 1:

Input: s = "leetcode", t = "coats"
Output: 7
Explanation: 
- In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".
- In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".
"leetcodeas" and "coatsleede" are now anagrams of each other.
We used a total of 2 + 5 = 7 steps.
It can be shown that there is no way to make them anagrams of each other with less than 7 steps.
Example 2:

Input: s = "night", t = "thing"
Output: 0
Explanation: The given strings are already anagrams of each other. Thus, we do not need any further steps.

 */
function minSteps(s, t){
    let steps = 0;
    let countS = new Array(26).fill(0);
    let countT = new Array(26).fill(0);
    let base = 'a'.charCodeAt(0) //

    for(let char of s){
        countS[char.charCodeAt(0) - base]++
    }
    for(let char of t){
        countT[char.charCodeAt(0) - base]++
    }
    for(let i = 0; i < 26; i++){
        steps += Math.abs(countS[i] - countT[i]);
    }

    return steps;
}
  
  // Example 1
  let s = "leetcode";
  let t = "coats";
  console.log(minSteps(s, t)); // Output: 7
  
  // Example 2
  s = "night";
  t = "thing";
  console.log(minSteps(s, t)); // Output: 0
  