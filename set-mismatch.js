let output = [];
let max = -Infinity;

var findErrorNums = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                output.push(nums[i]);
            }
        }
    }
    if (hasAllIntegers(nums, max)) {
        output.push(max + 1);
    }
    function hasAllIntegers(nums, max) {
        for (let i = 1; i <= max; i++) {
            if (!nums.includes(i)) {
                output.push(i);
                return false;
            }
        }
        return true;
    }
    return output;
};