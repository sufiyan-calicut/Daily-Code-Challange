// let arr = [1, 2, 3, [4, 5, [6], 7, 8, 9]]
// // Out =[1,2,3,4,5,6,7,8,9]

function convert(arr,newArr = []){
  for(let element of arr){
    if(Array.isArray(element)){
        convert(element,newArr)
    }else{
       newArr.push(element)
    }
  }
  return newArr;
}
let arr = [1, 2, 3, [4, 5, [6], 7, 8, 9]]
let converted = convert(arr);
console.log(converted)


// another
// function flatArray(array) {
//     let result = array.flatMap((resultArray) => resultArray).flat()
//     console.log(result);
// }
// flatArray(arr)