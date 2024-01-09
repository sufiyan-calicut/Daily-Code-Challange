/** 
Find the employee(s) with the second-highest salary.
If multiple employees share the second-highest salary, sort them alphabetically by name.

const employees = [
    { name: 'Alice', salary: 5000 },
    { name: 'Bob', salary: 7500 },
    { name: 'Charlie', salary: 5000 },
    { name: 'David', salary: 8000 },
    { name: 'Eva', salary: 7500 },
    { name: 'Frank', salary: 8000 }
];

// Output should be an array containing objects with the second-highest salary, sorted in order of Z to A:
// [{ name: 'Alice', salary: 5000 }, { name: 'Charlie', salary: 5000 }, { name: 'Eva', salary: 7500 }]
*/

const employees = [
  {name: 'Alice', salary: 5000},
  {name: 'Bob', salary: 7500},
  {name: 'Charlie', salary: 5000},
  {name: 'David', salary: 8000},
  {name: 'Eva', salary: 7500},
  {name: 'Frank', salary: 8000}
];

let uniqueSalary = [...new Set(employees.map(data => data.salary))].sort(
  (a, b) => b - a
);
let secondLargest = uniqueSalary[1];
let secondDoc = employees
  .filter(data => data.salary == secondLargest)
  .sort((a, b) => b.name.localeCompare(a.name));
console.log(secondDoc);
