"use strict";

const generateUser = document.getElementById("user-generate");
const loginUser = document.getElementById("user-login");
const userObjects = {};

const UserRoot = function (username, password) {
  this.username = username;
  this.password = password;
};

//generate user is a temporary function for now that will allow me to understand how to create objects
generateUser.addEventListener("click", function (e) {
  e.preventDefault();
  // get value from the form
  if (userObjects.hasOwnProperty(usernameInput)) {
    alert("Username already taken, select a different one");
  } else {
    const usernameInput = document.getElementById("usernameInput").value;
    const userPassword = document.getElementById("password").value;
    const newUser = new UserRoot(usernameInput, userPassword);
    userObjects[usernameInput] = newUser;
    console.log(userObjects[usernameInput]);
    console.log(userObjects);
  }
});

loginUser.addEventListener("click", function (e) {
  e.preventDefault();
  const usernameInput = document.getElementById("usernameInputLogin").value;
  let foundUser = null;

  for (const key in userObjects) {
    if (userObjects.hasOwnProperty(key)) {
      const user = userObjects[key];
      if (user.username === usernameInput) {
        foundUser = user;
        break;
      }
    }
  }
  if (foundUser) {
    console.log(`User found:`, foundUser);
  } else {
    console.log("User not found");
  }
});
