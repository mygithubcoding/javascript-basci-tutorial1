/* for(key in object){
    single object
}

single object

Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${value}`);
});

multiple objects - json object
data.forEach((obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${value}`);
  });
  console.log("-------------------");
});


const data = await response.json();

data.forEach(obj => {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${value}`);
  });
  console.log('-------------------');
});
  var arr = [ {"id":"10", "class": "child-of-9"}, {"id":"11", "class": "child-of-10"}];

  for (var i = 0; i < arr.length; i++){
    document.write("<br><br>array index: " + i);
    var obj = arr[i];
    for (var key in obj){
      var value = obj[key];
      document.write("<br> - " + key + ": " + value);
    }
  }
*/

var data = {
  id: 1,
  name: "siva",
  city: "tampa",
  zipcode: 33635,
};

var persons = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  },
  {
    firstName: "John1",
    lastName: "Doe1",
    age: 51,
    eyeColor: "red",
  },
  {
    firstName: "John2",
    lastName: "Doe2",
    age: 51,
    eyeColor: "green",
  },
  {
    firstName: "John3",
    lastName: "Doe3",
    age: 53,
    eyeColor: "yellow",
  },
  {
    firstName: "John4",
    lastName: "Doe4",
    age: 54,
    eyeColor: "violet",
  },
];

for (key in data) {
  console.log(`the values are ${data.name}`);
}

for (let i = 0; i < persons.length; i++) {
  var obj = persons[i];
  for (key in obj) {
    console.log(obj[key]);
  }
}

console.log("the object values are");
Object.entries(data).forEach(([key, value]) => {
  console.log(`${key},${value}`);
});

console.log("the json object values are");
persons.forEach((obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key},${value}`);
  });
});

var person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

var person2 = {
  firstName: "John",
  lastName: "Doe",
};
