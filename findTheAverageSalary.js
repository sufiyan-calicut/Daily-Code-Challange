// Find the average salary of employees in each department.
//  Sort the departments by their average salary in descending order.

// const employees = [
//   { name: 'Alice', department: 'HR', salary: 5000 },
//   { name: 'Bob', department: 'IT', salary: 7500 },
//   { name: 'Charlie', department: 'HR', salary: 6000 },
//   { name: 'David', department: 'IT', salary: 8000 },
//   { name: 'Eva', department: 'IT', salary: 7000 },
//   { name: 'Frank', department: 'HR', salary: 5500 }
// ];

// Your code here

// Output should be an array of objects, each representing a department and its
//  average salary, sorted by average salary in descending order:
// [{ department: 'IT', averageSalary: 7500 }, { department: 'HR', averageSalary: 5500 }]

const employees = [
  {name: 'Alice', department: 'HR', salary: 5000},
  {name: 'Bob', department: 'IT', salary: 7500},
  {name: 'Charlie', department: 'HR', salary: 6000},
  {name: 'David', department: 'IT', salary: 8000},
  {name: 'Eva', department: 'IT', salary: 7000},
  {name: 'Frank', department: 'HR', salary: 5500}
];

let hr = employees.filter(data => data.department == 'HR');
let it = employees.filter(data => data.department == 'IT');

let hrSum = hr.reduce((acc, curr) => (curr.salary += acc), 0);
let itSum = it.reduce((acc, curr) => (curr.salary += acc), 0);

let hrAvg = hrSum / hr.length;
let itAvg = itSum / it.length;

let factory = function (dep, avg) {
  return {
    department: dep,
    AverageSalary: avg
  };
};

let newArr = [];
let hrObj = factory('HR', hrAvg);
let itObj = factory('IT', itAvg);

newArr.push(hrObj, itObj);
newArr = newArr.sort((a, b) => b.AverageSalary - a.AverageSalary);

console.log(newArr);
