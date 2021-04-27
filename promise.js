const promise = new Promise((resolve, reject) => {
  console.log("the data");
  setTimeout(() => {
    resolve({ userName: "kiran" });
  }, 2000);
});

promise.then((user) => {
  console.log(user);
});

const promise1 = new Promise((resolve, reject) => {
  console.log("the data");
  setTimeout(() => {
    reject(new Error("User not logged in"));
  }, 2000);
});

promise1
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err.message));
