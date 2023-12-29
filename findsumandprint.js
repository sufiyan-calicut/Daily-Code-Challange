function findSum(arr) {
  if (arr.length < 1) {
    return;
  } else {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(`values${ar} , sum: ${sum}`);
    arr.pop();
    return findSum(arr);
  }
}

const ar = [1, 2, 3, 4, 5, 6, 7];

findSum(ar);
