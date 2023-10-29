console.log("Rectangle calculation:");
let height = 5;
console.log(`height is ${height}`);
let width = 5;
console.log(`width is ${width}`);
console.log(`Law of area of ​​a rectangle is
        height * width`);
let Rectangle = height * width;
console.log(`The area of the rectangle is: ${Rectangle} `);
console.log(`__________________________________________________
`);
console.log("temperature calculation:");
let C = 30;
console.log(`Celsius is ${C} NN°C`);
let F = 86;
console.log(`F is ${F} NN°F`);

let CF = C * 1.8 + 32;
console.log(`temperature Celsius To F ${CF}NN°F`);
let FC = (F - 32) / 1.8;
console.log(`temperature F to Celsius ${FC}NN°C`);

console.log(`__________________________________________________
`);

console.log("Time calculation");

let hour = 2;
console.log(`hours is ${hour}`);

let minutes = hour * 60;
console.log(`minutes is ${minutes}`);
let seconds = minutes * 60;
console.log(`seconds is ${seconds}`);

console.log(`${hour} hours in second is equals to ${seconds}ms`);

console.log(`__________________________________________________
`);

console.log("Grade calculation:");

let grade = 100;
console.log(`Grade is ${grade}`);
if (grade <= 100 && grade >= 95) {
  console.log(`A+`);
} else if (grade <= 94 && grade >= 90) {
  console.log(`A`);
} else if (grade <= 89 && grade >= 85) {
  console.log(`B+`);
} else if (grade <= 84 && grade >= 80) {
  console.log(`B`);
} else if (grade <= 79 && grade >= 75) {
  console.log(`C+`);
} else if (grade <= 74 && grade >= 60) {
  console.log(`C`);
} else if (grade <= 59 && grade >= 55) {
  console.log(`D+`);
} else if (grade <= 54 && grade >= 50) {
  console.log(`D`);
} else if (grade <= 49 && grade >= 0) {
  console.log(`F`);
} else {
  console.log(`F`);
}
