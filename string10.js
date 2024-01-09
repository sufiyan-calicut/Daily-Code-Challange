// Input = 'alice smith'
// // Expected Output: 'Smith Alice'

let Input = 'alice smith';

let result = Input.split(' ')
  .reverse()
  .map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  })
  .join(' ');

console.log(result);
