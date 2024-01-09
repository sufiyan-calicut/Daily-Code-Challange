// Input = 'hello world'
// // Expected Output: 'HeLlO wOrLd'

let Input = 'hello world';
let result = Input.split(' ')
  .map(element => {
    element = element.split('');
    for (let i = 0; i < element.length; i++) {
      if ((i + 1) % 2 == 1) {
        element[i] = element[i].toUpperCase();
      }
    }
    return element.join('');
  })
  .join(' ');
console.log(result);

// another way
/**
 * 
let Input = 'hello world';
let result = Input.split(' ')
.map(element => {
    const suArray = element
    .split('')
    .map((char, index) => {
        return (index + 1) % 2 === 1 ? char.toUpperCase() : char.toLowerCase();
    })
      .join('');
      return suArray;
  })
  .join(' ');
  
console.log(result);
  */
