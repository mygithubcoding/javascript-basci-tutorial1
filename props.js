const props = [
  { name: "siva", id: 1, marks: 98 },
  { name: "kiran", id: 2, marks: 18 },
  { name: "abhi", id: 3, marks: 80 },
  { name: "deepthi", id: 4, marks: 22 },
  { name: "valli", id: 5, marks: 62 },
  { name: "valli1", id: 6, marks: 37 },
  { name: "valli2", id: 7, marks: 36 },
  { name: "valli3", id: 8, marks: 23 },
];

function displayArray(props) {
  props.map(function (prop) {
    console.log("the values are");
    console.log([prop]);
  });
}

displayArray(props);

console.log(props[1]);
