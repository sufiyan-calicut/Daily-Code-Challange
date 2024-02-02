/**
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

var longestCommonPrefix = function (strs) {
  let word = strs[0];
  let count = 0;
  let prefix = '';

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    count = 0;
    
    for(let j = 0; j < strs.length; j++){
         if(char == strs[j].charAt(i)){
            count++;
         }
    }

    if(count == strs.length){
        prefix += char
    }else{
        break;
    }
    
  }
  return prefix
};
let strs = ["cir","car"];
let result = longestCommonPrefix(strs);
console.log(result);
