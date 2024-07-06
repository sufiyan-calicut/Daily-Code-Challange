/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct,
 and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.
 Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

 

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
Example 2:

Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]
 */

var relativeSortArray = function (arr1, arr2) {
    let map = new Map(arr2.map(key => [key, []]));
    let sortedArray = [];
    map.set('x', []); // it will contains all other values which doesn't exist in arr2
  
    while (arr1.length) {
      let element = arr1.shift();
      if (!map.has(element)) {
        map.get('x').push(element);
      } else {
        map.get(element).push(element); // keys and values are same
      }
    }
  
    map.get('x').sort((a, b) => a - b);
  
    sortedArray = Array.from(map.values()).flat();
    return sortedArray
  
    
   
  };
  
  
  let arr1 = [2, 3, 1, 3,19, 2, 4, 6, 7, 9, 2, ];
  let arr2 = [2, 1, 4, 3, 9, 6];
  let sortedArray = relativeSortArray(arr1, arr2);
  
  console.log(sortedArray);
  