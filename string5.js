// Input = "helloWorldOfProgramming"
// // Output: "Hello World Of Programming"

let Input = "helloWorldOfProgramming";

let result = Input.split(/(?=[A-Z])/).map((element)=>{
    return element.charAt(0)+element.slice(1)
}).join(' ')

console.log(result)