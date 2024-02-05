'use strict'

function get(url) {
    return fetch(url, {
        method: 'GET',
        headers: {
            'User-Agent': 'CamBam/3.0',
        },
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data;
        });
    }

let topStorage = document.getElementById("topSongsContainer");
const btn = document.getElementById("searchButton");

let queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
const artistId = parameters.get('artistId');


get(`https://api.discogs.com/artists/${artistId}?token=bcpQNVIauxqMfkrETtEgDeXDtdMdrXbAtNOMbgWi`).then(function (
    data
) {
    const { name, releases_url } = data;
    console.log(name)
});
