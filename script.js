"use strict";

const generateUser = document.getElementById("user-generate");
const userObjects = {};

const UserRoot = function (username) {
  this.username = username;
};

//generate user is a temporary function for now that will allow me to understand how to create objects
generateUser.addEventListener("click", function (e) {
  e.preventDefault();
  // get value from the form
  const usernameInput = document.getElementById("usernameInput").ariaValueMax;
  const newUser = new UserRoot(usernameInput);
  userObjects[usernameInput] = newUser;
  console.log(userObjects[usernameInput]);
  // console.log();
});
