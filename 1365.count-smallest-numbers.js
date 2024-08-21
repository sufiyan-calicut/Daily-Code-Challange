var smallerNumbersThanCurrent = function(nums) {
    const result = new Array(nums.length).fill(0);
  
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
          result[i]++;
        }
      }
    }
  
    return result;
  };
  

let nums = [8,1,2,2,3];
console.log(smallerNumbersThanCurrent(nums))