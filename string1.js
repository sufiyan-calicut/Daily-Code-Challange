// let String = "this is amazingLife setData for lived"
// // Output = "This Is Amazing Life Set Data For Lived

let String = 'this is amazingLife setData for lived';

let result = String.split(/(?=[A-Z])/)
  .join(' ')
  .split(' ')
  .map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  })
  .join(' ');
console.log(result);
