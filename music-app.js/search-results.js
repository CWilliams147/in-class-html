"use strict";

function get(url) {
  return fetch(url, {
    method: "GET",
    headers: {
      "User-Agent": "CamBam/3.0",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    });
}

const topStorage = document.getElementById("topSongsContainer");
const btn = document.getElementById("searchButton");
const artistReleases = document.getElementById("artistReleases");

let queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
const artistId = parameters.get("artistId");

get(
  `https://api.discogs.com/artists/${artistId}?token=bcpQNVIauxqMfkrETtEgDeXDtdMdrXbAtNOMbgWi`
).then(function (data) {
  const { name, releases_url } = data;
  console.log(name);
  const artistName = document.createElement("h2");
  artistName.textContent = name;
  topStorage.append(artistName);
});

get(
  `https://api.discogs.com/artists/${artistId}/releases?token=bcpQNVIauxqMfkrETtEgDeXDtdMdrXbAtNOMbgWi`
).then(function (data) {
  data.releases.forEach(function (release) {
    const releaseContainer = document.createElement("div");
    releaseContainer.classList.add("release-container");

    const releaseTitle = document.createElement("h3");
    releaseTitle.textContent = release.title;

    const releaseYear = document.createElement("p");
    releaseYear.textContent = `Year: ${release.year}`;

    releaseContainer.appendChild(releaseTitle);
    releaseContainer.appendChild(releaseYear);

    artistReleases.appendChild(releaseContainer);
  });
});
