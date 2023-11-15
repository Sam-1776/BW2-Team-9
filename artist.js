const param = new URLSearchParams(window.location.search);
console.log(param);
const productId = param.get("id");
console.log("RESOURCE ID: ", productId);

if (productId) {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/artists/" + productId, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "68a8776b0bmsh6e2a39f98b70d75p1790aejsn95b31ef05b61",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((artist) => {});
}

/*console.log(data);
const header = document.getElementById("header-artist");
// header.style.backgroundImage = "url('" + data.artist.picture_big + "')";
const h1 = document.getElementById("h1-artist");
console.log(h1);
// h1.innerText = data.artist.name;*/
