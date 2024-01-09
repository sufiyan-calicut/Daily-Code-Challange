// find maximum salary object,if one or more object have maximum salary sort that objects alphabetically

const obj = [
  {name: 'd', salary: 1250},
  {name: 'b', salary: 2000},
  {name: 'zayan', salary: 45000},
  {name: 'fayas', salary: 5000},
  {name: 'asim', salary: 45000}
];
let salary = Math.max(...obj.map(e => e.salary));
let maxData = obj
  .filter(element => {
    return element.salary == salary;
  })
  .sort((a, b) => a.name.localeCompare(b.name));

console.log(maxData);
