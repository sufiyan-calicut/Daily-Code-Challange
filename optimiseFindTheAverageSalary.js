
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
  
  // Group employees by department
  const groupedByDepartment = employees.reduce((acc, employee) => {
    acc[employee.department] = acc[employee.department] || [];
    acc[employee.department].push(employee.salary);
    return acc;
  }, {});

  console.log('group',groupedByDepartment)
  
  // Calculate average salary for each department
  const departmentAverages = Object.entries(groupedByDepartment).map(([department, salaries]) => ({
    department,
    averageSalary: salaries.reduce((total, salary) => total + salary, 0) / salaries.length
  }));
  
  // Sort departments by average salary in descending order
  const sortedDepartments = departmentAverages.sort((a, b) => b.averageSalary - a.averageSalary);
  
  console.log(sortedDepartments);
  