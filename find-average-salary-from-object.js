// Question:
// You have an object representing a student's grades in different subjects.
// Write a function that calculates the average grade and returns it.

// Sample Object:
const studentGrades = {
  math: 90,
  science: 85,
  history: 88,
  english: 92
};

// Your Task:
// Write a function named calculateAverageGrade that takes the studentGrades object as an argument
// and returns the average grade.

// Your Code Here:
function calculateAverageGrade(grades) {
  let sum = Object.values(grades).reduce((acc, curr) => curr + acc, 0);
  let length = Object.values(grades).length;
  let avg = sum / length;
  return avg;
}

// Example Usage:
const averageGrade = calculateAverageGrade(studentGrades);
console.log(`The average grade is: ${averageGrade}`);
