// function runThis(callback) {
//   console.log("Running");
//   callback(10);
// }

// runThis((a) => {
//   console.log("the values is", a);
// });

// function f1(a) {
//   console.log("The values is ", a);
// }

// setTimeout(() => {
//   console.log("I have waited for 3 secs");
// }, 3000);

console.log("Start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    callback({ userEmail: email });
  }, 2000);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3", "video4", "video5"]);
  }, 1000);
}

function getVideoTitle(video, callback) {
  setTimeout(() => {
    callback("This is the video title");
  }, 500);
}

const user = loginUser("myemail@gmail.com", "password", (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    getVideoTitle(videos[0], (title) => {
      console.log(title);
    });
  });
});

console.log("Finish");
