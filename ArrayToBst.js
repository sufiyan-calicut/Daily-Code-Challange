var sortedArrayToBST = function(nums) {
    // Base case: if the array is empty, return null
    if (nums.length === 0) {
      return null;
    }
  
    // Find the middle index of the array
    const midIndex = Math.floor(nums.length / 2);
  
    // Create a new TreeNode with the middle element as the value
    const root = {
      value: nums[midIndex],
      left: null,
      right: null,
    };
    console.log(JSON.stringify(root))
  
    // Recursively build the left and right subtrees
    root.left = sortedArrayToBST(nums.slice(0, midIndex));
    root.right = sortedArrayToBST(nums.slice(midIndex + 1));
  
    return root;
  };
  
  // Example usage:
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const balancedBST = sortedArrayToBST(nums);
  console.log(balancedBST);
  