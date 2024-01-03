
function removeDuplicates(nums) {
    let j = 1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
        nums[j] = nums[i];
        j++;
      }
    }
    return j;
  }


// Example of using the class

const nums = [1, 1, 2, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(nums);
console.log(result); // Output: 5
console.log(nums.slice(0, result)); // Output: [1, 2, 3, 4, 5]
