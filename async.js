const { json } = require("express");

//https://rallycoding.herokuapp.com/api/music_albums
// function fetchAlbum() {
//     fetch('https://rallycoding.herokuapp.com/api/music_albums')
//         .then(res => res.json())
//         .then(json => console.log(json))
// }

const fetchAlbum = async() => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()
    console.log(json);
}

fetchAlbum();