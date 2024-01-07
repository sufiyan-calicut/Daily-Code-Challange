function SecondLargest(matrix) {
  let largest = -Infinity;
  let SecondLargest = -Infinity;

  for (let element of matrix) {
    for (let value of element) {
      if (value > largest) {
        SecondLargest = largest;
        largest = value;
      } else if (value > SecondLargest && value < largest) {
        SecondLargest = value;
      }
    }
  }

  // if using for loop it will look like
  /** 
   *   for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > largest) {
        SecondLargest = largest;
        largest = matrix[i][j];
      } else if ( matrix[i][j] > SecondLargest  &&  matrix[i][j] < largest) {
        SecondLargest = matrix[i][j];
      }
    }
  }
   */
  return SecondLargest;
}

const arr = [
  [5, 15, 25],
  [30, 20, 10],
  [150, 100, 50]
];

console.log(SecondLargest(arr));
