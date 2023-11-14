"use strict";

const generateUser = document.getElementById("user-generate");

const UserRoot = function (username) {
  this.username = username;
};

//generate user is a temporary function for now that will allow me to understand how to create objects
generateUser.addEventListener("click", function () {
  const newUser = new UserRoot("Robert");
  console.log(newUser);
  // console.log();
});
