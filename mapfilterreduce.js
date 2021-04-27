//const arr = [1, 2, 3, 4, 5];

const Students = [
  { name: "siva", id: 1, marks: 98 },
  { name: "kiran", id: 2, marks: 18 },
  { name: "abhi", id: 3, marks: 80 },
  { name: "deepthi", id: 4, marks: 22 },
  { name: "valli", id: 5, marks: 62 },
  { name: "valli1", id: 6, marks: 37 },
  { name: "valli2", id: 7, marks: 36 },
  { name: "valli3", id: 8, marks: 23 },
];

const arr1 = Students.map((student) => {
  return student.name.toUpperCase();
});

const arr2 = Students.filter((student) => {
  return student.marks > 60;
});

const arr3 = Students.reduce((acc, emp) => {
  return acc + emp.marks;
}, 0);

const arr4 = Students.filter(function (student) {
  return student.marks > 50;
}).map((item) => {
  return item.name;
});

// const arr5 = Students.map(function (stu) {
//   if (stu.marks < 50) {
//     stu.marks += 15;
//   }
//   return stu;
// })
//   .filter((stu) => stu.marks > 50)
//   .reduce((acc, curr) => acc + curr.marks, 0);

//console.log("Mapped values");
// console.log(arr1);
// console.log("Filtered values");
// console.log(arr2);
// console.log("Reduced values");
// console.log(arr3);
console.log("Mapped and Filtered values");
console.log(arr4);
//console.log("Mapped and Filtered, Reduced values");
//console.log(arr5);
