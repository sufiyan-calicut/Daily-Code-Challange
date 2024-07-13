/**
 * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

Example 1:



Input: text = "nlaebolko"
Output: 1
Example 2:



Input: text = "loonbalxballpoon"
Output: 2
Example 3:

Input: text = "leetcode"
Output: 0
 *
 */

function maxNumberOfBalloons(text) {
  const counts = {b: 0, a: 0, l: 0, o: 0, n: 0};

  for (const char of text) {
    if (counts.hasOwnProperty(char)) {
      counts[char]++;
    }
  }

  // 'l' and 'o' are required twice as much as 'b', 'a', and 'n'
  counts['l'] = Math.floor(counts['l'] / 2);
  counts['o'] = Math.floor(counts['o'] / 2);

  return Math.min(
    counts['b'],
    counts['a'],
    counts['l'],
    counts['o'],
    counts['n']
  );
}

const text = 'loonbalxballpoon';
console.log(maxNumberOfBalloons(text));
