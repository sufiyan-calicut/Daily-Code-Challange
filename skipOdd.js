// skip to elements if the element is odd

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  if (array[i] % 2 == 1) {
    i = i + 2;
  }
}
