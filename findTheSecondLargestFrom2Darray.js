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
  return SecondLargest;
}

const arr = [
  [5, 15, 25],
  [30, 20, 10],
  [150, 100, 50]
];

console.log(SecondLargest(arr))