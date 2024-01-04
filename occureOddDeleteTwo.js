// if find an odd number delete next two number;

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    arr.splice(i + 1, 2);
  }
  // console.log(arr);
}

console.log(arr);
