"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("CONTENT LOADED");
  const form = document.querySelector("#myForm");
  console.log(form);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("bug fix");
    const myInput = document.querySelector("#searchInput");
    window.location.href = `./search-results.html?artistId=${myInput.value}`;
  });
});
