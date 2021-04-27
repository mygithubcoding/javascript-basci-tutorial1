console.log("Start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email });
    }, 2000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3", "video4", "video5"]);
    }, 1000);
  });
}

function getVideoTitle(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is the video title");
    }, 500);
  });
}

loginUser("myemail", "password")
  .then((user) => {
    console.log(user.userEmail);
    return getUserVideos(user.userEmail);
  })
  .then((videos) => {
    console.log(videos);
    return getVideoTitle(videos[0]);
  })
  .then((title) => {
    console.log(title);
  });

const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from youtube");
    resolve({ videos: [1, 2, 3, 4, 5, 6] });
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from Facebook");
    resolve({ user: "siva" });
  }, 2000);
});
// const user = loginUser("myemail@gmail.com", "password", (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     getVideoTitle(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// });

Promise.all([yt, fb]).then((result) => console.log(result));

console.log("Finish");
