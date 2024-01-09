// Input = "javascriptIsAwesome"
// Output: "Javascript Is Awesome"

let Input = 'javascriptIsAwesome';

let result = Input.split(/(?=[A-Z])/)
  .map(element => element.charAt(0).toUpperCase() + element.slice(1))
  .join(' ');

  console.log(result)