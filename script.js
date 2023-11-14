"use strict";

const generateUser = document.getElementById("user-generate");

const UserRoot = function (username) {
  console.log(this);
};

//generate user is a temporary function for now that will allow me to understand how to create objects
generateUser.addEventListener("click", function () {
  new UserRoot("Robert");
  // console.log();
});
