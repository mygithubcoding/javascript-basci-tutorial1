let a = false;
let f = true;
let b = "This is how && works";
let c = "This is how || works";

let d = a || c;
console.log(d);

let age = prompt("enter age");
const student = () => {
  console.log("ticket price is 8, check for id");
};

let e =
  age > 60
    ? "Ticket price is 6"
    : age > 16 && age < 21
    ? student()
    : "ticket price is 10";

console.log("the e value si ");
console.log(e);
