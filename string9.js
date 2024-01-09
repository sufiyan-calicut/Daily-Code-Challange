// 11
// Input = 'john doe'
// // Expected Output: 'Nhoj Eod'

let Input = 'john doe';

let result = Input.split(' ').map((element)=>{
    element = element.split('').reverse().join('')
    return element.charAt(0).toUpperCase()+element.slice(1);
}).join(' ')

console.log(result)
