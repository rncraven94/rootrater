"use strict";

const generateUser = document.getElementById("user-generate");
const userObjects = {};

const UserRoot = function (username, password) {
  this.username = username;
  this.password = password;
};

//generate user is a temporary function for now that will allow me to understand how to create objects
generateUser.addEventListener("click", function (e) {
  e.preventDefault();
  // get value from the form
  const usernameInput = document.getElementById("usernameInput").value;
  const userPassword = document.getElementById("password").value;
  const newUser = new UserRoot(usernameInput, userPassword);
  userObjects[usernameInput] = newUser;
  console.log(userObjects[usernameInput]);
  console.log(userObjects);
  // console.log();
});
