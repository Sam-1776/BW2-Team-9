const param = new URLSearchParams(window.location.search);
console.log(param);
const productId = param.get("id");
console.log("RESOURCE ID: ", productId);

window.onload = () =>{
  laodPagePlay()
}

if (productId) {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + productId, {
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
    .then((artist) => {
      console.log(artist);
      const header = document.getElementById("header-artist");
      header.style.backgroundImage = "url('" + artist.picture_big + "')";
      const h1 = document.getElementById("h1-artist");
      console.log(h1);
      h1.innerText = artist.name;
    });
}

if (productId) {
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
      productId +
      "/top?limit=10",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "68a8776b0bmsh6e2a39f98b70d75p1790aejsn95b31ef05b61",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const ol = document.getElementById("ol-artist");
      for (let i = 0; i < 4; i++) {
        const liAr = document.createElement("li");
        liAr.className = "li-artist";
                const imgAr = document.createElement("img");
        imgAr.src = data.data[i].album.cover_small;
        liAr.appendChild(imgAr);
        imgAr.className = "img-artist";

        const titleText = document.createElement("span");
        titleText.innerText = data.data[i].title;
        liAr.appendChild(titleText);

        ol.appendChild(liAr);

        const olVis = document.getElementById("ol-visual");
        const liVis = document.createElement("li");
        olVis.appendChild(liVis);
        liVis.innerText = data.data[i].rank;
        liVis.className = "livis";

        const olTime = document.getElementById("ol-time");
        const liTime = document.createElement("li");
        olTime.appendChild(liTime);
        liTime.innerText = convertiSecondiInMinuti(data.data[i].duration);
        liTime.className = "livis";

        const imglike = document.getElementById("img");
        const mimg = document.getElementById("mimg");

        const pText = document.getElementById("p-text");

        pText.innerText = "di " + data.data[i].artist.name;
      }
      mimg.src = data.data[0].album.cover_small;
      const anchor = document.getElementById("anchor-art");
      let listOpen = false;

      anchor.addEventListener("click", function (event) {
        if (!listOpen) {
          event.preventDefault();

          console.log("ciap");
          const olVis = document.getElementById("ol-vis");

          for (let j = 4; j < 10; j++) {
            const liVis = document.createElement("li");
            liVis.className = "li-artist";

            const imgArs = document.createElement("img");
            imgArs.src = data.data[j].album.cover_small;
            imgArs.className = "img-artist";

            const titleTextsn = document.createElement("span");
            titleTextsn.innerText = data.data[j].title;

            liVis.appendChild(imgArs);
            liVis.appendChild(titleTextsn);

            olVis.appendChild(liVis);
          }
          listOpen = true;
        }
      });
    });
}

function convertiSecondiInMinuti(secondi) {
  const minuti = Math.floor(secondi / 60);
  const secondiResidui = secondi % 60;

  const secondoFormattato =
    secondiResidui < 10 ? "0" + secondiResidui : secondiResidui;

  return minuti + ":" + secondoFormattato;
}




const laodPagePlay = () => {
  const item = JSON.parse(localStorage.getItem("namePlaylist"));
  console.log(item);
  if (item) {
    item.forEach(element => {
      createListItem(ul,element)
    });
  }
};
