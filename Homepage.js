const search = document.getElementById("search");
console.log(search);
const buttonB = document.getElementById("backHome");
const barInput = document.getElementById("barSearch");
const newSection = document.getElementById("reSearch");
const ricerca = document.getElementById("ricerca");

search.onclick = () => {
  const section1 = document.querySelector("#section1");
  const section2 = document.querySelector("#section2");
  newSection.classList.remove("d-none");
  barInput.classList.remove("d-none");
  console.log(section1);
  console.log(section2);
  section1.classList.add("d-none");
  section2.classList.add("d-none");
  advertisementContainer.classList.add("d-none");
  buttonB.classList.add("active");
  const card = document.querySelectorAll(".cardSearch");
  console.log(card);
  card.forEach((element) => {
    element.onclick = (element) => {
      const txt = element.srcElement.children[0].innerText;
      console.log(element);
      console.log(element.srcElement);
      console.log(element.srcElement.children[0]);
      console.log(element.srcElement.children[0].innerText);
      console.log(txt);
      made(txt);
    };
  });
  buttonB.onclick = () => {
    window.location.assign("./Homepage.html");
    barInput.classList.add("d-none");
    newSection.classList.add("d-none");
    ricerca.classList.add("d-none");
  };
};

const URL = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";
const Key = "68a8776b0bmsh6e2a39f98b70d75p1790aejsn95b31ef05b61";

barInput.onchange = () => {
  const query = barInput.value;
  ricerca.classList.remove("d-none");
  fetch(URL + query, {
    headers: {
      "X-RapidAPI-Key": Key,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((resp) => resp.json())
    .then((Obj) => {
      console.log(Obj);
      Artist(Obj);
      Brani(Obj);
      generateNewC(Obj, "Songs");
    })
    .catch((err) => console.log(err));
};

const container = document.querySelector("#searchQ");

/* Creazione Card info artista */

const Artist = (x) => {
  newSection.classList.add("d-none");
  const row = document.createElement("div");
  row.className = "col-5";
  const col = document.createElement("div");
  col.className = "rounded bg-dark";
  col.style = "height: 216px";
  const div = document.createElement("div");
  div.className = "m-3";
  const a = document.createElement("a");
  const img = document.createElement("img");
  img.className = "rounded-circle overflow-hidden img-fluid mb-3 mt-2";
  img.style = "width: 80px; height:80px";
  const h3 = document.createElement("h3");
  h3.className = "fw-bold";
  const divT = document.createElement("div");
  /* divT.style = "width: 36px; heigth: 36px" */
  const h4 = document.createElement("h4");
  h4.innerText = "Risultato più rilevante";
  const span = document.createElement("span");
  span.className = "badge text-ligth rounded-pill";
  span.style = "background-color: #121212";

  img.src = x.data[1].artist.picture_small;
  h3.innerText = x.data[1].artist.name;
  span.innerHTML = x.data[1].artist.type;

  a.appendChild(img);
  div.appendChild(a);
  div.appendChild(h3);
  div.appendChild(span);
  col.appendChild(div);
  divT.appendChild(h4);
  row.appendChild(divT);
  row.appendChild(col);
  container.appendChild(row);
};

/* Creazione card right brani */

const Brani = (x) => {
  const row = document.createElement("div");
  row.className = "col-7";
  const divT = document.createElement("div");
  divT.className = "mb-3";
  const h4 = document.createElement("h4");
  h4.innerText = "Brani";
  divT.appendChild(h4);
  row.appendChild(divT);
  for (let i = 0; i < 4; i++) {
    const j = Math.floor(Math.random() * 25);
    console.log(j);
    const col = document.createElement("div");
    col.className =
      " d-flex justify-content-between align-items-center rounded mb-2";
    const div = document.createElement("div");
    div.className = "d-flex";
    const divI = document.createElement("div");
    const divR = document.createElement("div");
    const img = document.createElement("img");
    img.src = x.data[j].album.cover_small;
    img.className = "rounded me-2";
    img.style = "width: 46px; height:46px";
    img.onclick = () => startPlayer(x.data[j]);
    const a = document.createElement("a");
    const an = document.createElement("a");
    const h5 = document.createElement("h5");
    h5.innerHTML = x.data[j].title;
    h5.className = "m-0";
    const p = document.createElement("p");
    p.className = "m-0";
    p.innerHTML = convertiSecondiInMinuti(x.data[j].duration);
    const span = document.createElement("span");
    span.innerHTML = x.data[j].artist.name;

    div.appendChild(img);
    a.appendChild(h5);
    an.appendChild(h5);
    divI.appendChild(a);
    divI.appendChild(an);
    if (x.data[j].explicit_lyrics === true) {
      const i = document.createElement("i");
      i.className = "bi bi-explicit-fill d-inline-block me-2";
      divI.appendChild(i);
    }
    divI.appendChild(span);
    div.appendChild(divI);

    col.appendChild(div);
    divR.appendChild(p);
    col.appendChild(divR);
    row.appendChild(col);
  }

  container.appendChild(row);
};

const made = (x) => {
  console.log(x);
  fetch(URL + x, {
    headers: {
      "X-RapidAPI-Key": Key,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((resp) => resp.json())
    .then((Obj) => {
      console.log(Obj);
      generateNewC(Obj, x);
    })
    .catch((err) => console.log(err));
};

/* Creazioni card song */

const generateNewC = (x, str) => {
  console.log(str);
  newSection.classList.add("d-none");
  const container = document.getElementById("searchC");
  const row = document.createElement("div");
  row.className = "row";
  const h2 = document.createElement("h2");
  h2.innerText = str;
  h2.className = "fs-1 mb-4";
  for (let i = 0; i < 16; i++) {
    const col = document.createElement("div");
    col.className = "col-3 mb-3";
    const card = document.createElement("div");
    card.className = "card ";
    card.style = "background-color: #212529 ";
    const divF = document.createElement("div");
    divF.className =
      "d-flex justify-content-center align-items-center card-img-top mt-3";
    divF.style = "width: 80%; margin: auto";
    const img = document.createElement("img");
    img.className = "card-img-top rounded shadow img-fluid";
    img.src = x.data[i].album.cover_medium;
    img.style = "width: 100%";
    img.onclick = () => startPlayer(x.data[i]);
    const body = document.createElement("div");
    body.className = "card-body";
    const aA = document.createElement("a");
    aA.onclick = () => {
      window.location.assign("./album.html?id=" + x.data[i].album.id);
    };
    const h5 = document.createElement("h5");
    h5.className = "card-title text-light";
    h5.innerText = x.data[i].title;
    const aArt = document.createElement("a");
    aArt.onclick = () => {
      window.location.assign("./myArtist.html?id=" + x.data[i].artist.id);
    };
    const p = document.createElement("p");
    p.className = "card-text text-light";
    p.innerText = x.data[i].artist.name;

    aArt.appendChild(p);
    aA.appendChild(h5);
    body.appendChild(aA);
    body.appendChild(aArt);
    divF.appendChild(img);
    card.appendChild(divF);
    card.appendChild(body);
    col.appendChild(card);
    row.appendChild(col);
  }

  container.appendChild(h2);
  container.appendChild(row);
};

const saluto = document.getElementById("saluto");
const ore = new Date().getHours();
console.log(ore);
if (ore >= 12) {
  saluto.innerHTML = "Buonasera";
} else {
  saluto.innerHTML = "Buongiorno";
}

/* Dati sul footer */

const footer = document.querySelector("footer");
console.log(footer);
const startPlayer = (y) => {
  console.log(y);
  footer.classList.remove("d-none");
  const img = document.querySelector(".left-part-img");
  console.log(img);
  img.src = y.album.cover_small;
  const h3 = document.querySelector(".leftPart-h3");
  h3.innerHTML = y.title;
  h3.onclick = () => {
    window.location.assign("./album.html?id=" + y.album.id);
  };
  const h5 = document.querySelector(".leftPart-h5");
  h5.innerHTML = y.artist.name;
  h5.onclick = () => {
    window.location.assign("./myArtist.html?id=" + y.artist.id);
  };
  const time = document.querySelector("#time");
  time.innerHTML = convertiSecondiInMinuti(y.duration);

  const main = document.getElementById("mainAside");
  main.style = "height: calc(100vh - 60px)";
  const barLeft = document.getElementById("playlist");
  barLeft.style = " height: calc(100vh - 416.5px)";
  localStorage.setItem("info", JSON.stringify(y));
};

function convertiSecondiInMinuti(secondi) {
  const minuti = Math.floor(secondi / 60);
  const secondiResidui = secondi % 60;

  const secondoFormattato =
    secondiResidui < 10 ? "0" + secondiResidui : secondiResidui;

  return minuti + ":" + secondoFormattato;
}

window.onload = () => {
  laodPage();
  headerloaded();
};

const laodPage = () => {
  const item = JSON.parse(localStorage.getItem("info"));
  console.log(item);
  if (item) {
    startPlayer(item);
  }
};

/* localStorage.removeItem("info") */

// DIV HEADER
const advertisementContainer = document.querySelector(
  "#advertisementContainer"
);
const headerloaded = function () {
  const advertismentLoading = () => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=hip-pop", {
      headers: {
        "X-RapidAPI-Key": "971f3683c1mshd0d96937de5880fp110e78jsn1242e8b2381c",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((song) => {
        currentPlaylist(song);
        console.log(song);
      })
      .catch((err) => console.error(err.message));

    function currentPlaylist(current) {
      console.log(current);
      const randomNum = Math.floor(Math.random() * (current.data.length - 1));
      const randomSong = current.data[randomNum];
      const currentCoverAlbum = randomSong.album.cover_medium;
      const currentTitle = randomSong.title;
      const currentPlayed = randomSong.album.title;
      const currentArtist = randomSong.artist.name;
      const currentAlbumId = randomSong.album.id;
      const currentArtistId = randomSong.artist.id;
      const containerText = [
        "Canzone del momento",
        "Ascolta di nuovo",
        "Ascoltato recentemente",
      ];
      const randomPosition = Math.floor(Math.random() * containerText.length);
      const randomText = containerText[randomPosition];

      advertisementContainer.innerHTML += `
               <div class="col-12 d-flex flex-column flex-md-row p-3 rounded" id="advertisementContainer">
               <div class="col-md-4 col-12 me-3 py-5">
                 <img src="${currentCoverAlbum}" alt="" class="img-fluid" style="width:100%; aspect-ratio: 1/1;";>
               </div>
               <div class="d-flex col-md-auto flex-column justify-content-center" id="textAndButton-Container">
                 <div>
                 <h5>${currentTitle}</h5>
                 <h1 class="display-4">${currentPlayed}</h1>
                 <p class="h3"><a href="./myArtist.html?id=${currentArtistId}">${currentArtist}</a></p>
                 <p class="h4">${randomText}</p>
                 <div>
                 <button class="btn btn-success me-3 px-4 rounded-pill" id="play" type="
                 button">PLAY</button>
                 <button class="btn btn-outline-light px-4 rounded-pill" id="save" type="
                 button">SALVA</button>
  </div>
               </div>
               </div>
                     </div>
               `;
      const play = document.getElementById("play");

      play.onclick = () => startPlayer(randomSong);
    }
  };
  advertismentLoading();
};
/* const cardSearchTot = 52;
const cardColor = document.querySelectorAll("#cardColor");
for (let index = 0; index < cardColor.length; index++) {
  let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  randomColor = `#${randomColor.padStart(6, "0")}`;

  cardColor.style.backgroundColor = `${randomColor}`;
} */


/* Playlist HomePage */



