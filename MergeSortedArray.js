var merge = function (nums1, m, nums2, n) {
  let length = m + n;
  for (let i = m; i < length; i++) {
    nums1[i] = nums2.shift();
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
