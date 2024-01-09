// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"

let Input = "is2 sentence4 This1 a3"
let result = Input.split(' ').sort((data1,data2)=>data1[data1.length  - 1] - data2[data2.length - 1]).map((element)=> element.slice(0,element.length - 1 )).join(' ');
console.log(result)