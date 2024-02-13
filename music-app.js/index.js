"use strict";
// index.js

document.addEventListener("DOMContentLoaded", function () {
  // Function to add favorite artist
  function addFavorite() {
    // Get the user input
    var userInput = document.getElementById("input").value;

    // Check if the input is not empty
    if (userInput.trim() !== "") {
      // Create a new list item
      var listItem = document.createElement("div");
      listItem.className = "favorite-item";
      listItem.appendChild(document.createTextNode(userInput));

      // Append the new item to the favorites list
      document.querySelector(".favorites").appendChild(listItem);

      // Clear the input field
      document.getElementById("input").value = "";
    }
  }

  // Event listener for the "Add" button
  document
    .getElementById("add-favorites")
    .addEventListener("click", addFavorite);
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Content Loaded");
});
