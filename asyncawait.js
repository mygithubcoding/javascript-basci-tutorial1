console.log("Start");

function loginUser(email, password) {
  console.log("we have the data");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email });
    }, 200);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {  
      resolve(["video1", "video2", "video3", "video4", "video5"]);
    }, 200);
  });
}

function getVideoTitle(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is the video title");
    }, 500);
  });
}

// loginUser("myemail", "password")
//   .then((user) => {
//     console.log(user.userEmail);
//     return getUserVideos(user.userEmail);
//   })
//   .then((videos) => {
//     console.log(videos);
//     return getVideoTitle(videos[0]);
//   })
//   .then((title) => {
//     console.log(title);
//   });

async function displayUser() {
  try {
    const loggedUser = await loginUser("myemail", "password");
    const videos = await getUserVideos(loggedUser.userEmail);
    const title = await getVideoTitle(videos[0]);
    console.log(title);
  } catch (err) {
    console.log(err.message);
  }
}

displayUser();
