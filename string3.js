// Input = "thisIsCamelCaseString"
// // Output: "This Is Camel Case String"

let Input = 'thisIsCamelCaseString';

let result = Input.split(/(?=[A-Z])/)
  .map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  })
  .join(' ');
console.log(result);
