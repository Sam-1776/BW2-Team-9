const params = new URLSearchParams(window.location.search);
const newId = params.get("id");
console.log(newId);

const URL = "https://deezerdevs-deezer.p.rapidapi.com/artist/";
const Key = "971f3683c1mshd0d96937de5880fp110e78jsn1242e8b2381c";
const URLT = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
const limit = "/top?limit=10";

window.onload = () => {
  generate();
  laodPage();
};

const buttonB = document.getElementById("backHome");
buttonB.onclick = () => {
  window.location.assign("./Homepage.html");
};

const generate = () => {
  fetch(URL + newId, {
    headers: {
      "X-RapidAPI-Key": Key,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((resp) => resp.json())
    .then((element) => {
      console.log(element);
      makeHead(element);
      makeBody();
    });
};

const makeHead = (x) => {
  const row = document.getElementById("infoArtist");
  const img = document.createElement("img");
  img.src = x.picture_big;
  img.className = "img-fluid";
  img.style = "width: 100%; aspect-ratio: 4/3;";
  const div = document.createElement("div");
  div.className = "d-flex flex-column position-absolute text-light ms-2";
  div.style = "bottom: 10px; left:10px";
  const h5 = document.createElement("h5");
  h5.innerHTML = x.type;
  h5.className = "m-0 position-absolute";
  h5.style = "bottom: 125px";
  const h1 = document.createElement("h1");
  h1.innerHTML = x.name;
  h1.style = "font-size: 5rem";
  h1.className = "mb-1 fw-bold";
  const p = document.createElement("p");
  p.innerHTML = x.nb_fan + " ascolti mensili";
  p.className = "fw-bold";

  div.appendChild(h5);
  div.appendChild(h1);
  div.appendChild(p);
  row.appendChild(div);
  row.appendChild(img);
};

const makeBody = () => {
  fetch(URLT + newId + limit, {
    headers: {
      "X-RapidAPI-Key": Key,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((resp) => resp.json())
    .then((element) => {
      Brani(element);
      Artist(element);
      console.log(element);
    });
};
const container = document.getElementById("containerBody");

const Brani = (x) => {
  const buttonP = document.querySelector(".bi-play-circle-fill");
  buttonP.onclick = () => {
    const index = Math.floor(Math.random() * x.data.length);
    console.log(x.data[index]);
    startPlayer(x.data[index]);
  };
  const row = document.createElement("div");
  row.className = "col-12 col-md-6 order-2 order-md-1";
  const divT = document.createElement("div");
  divT.className = "mb-3";
  const h4 = document.createElement("h4");
  h4.innerText = "Popolari";
  divT.appendChild(h4);
  row.appendChild(divT);
  for (let i = 0; i < 5; i++) {
    const col = document.createElement("div");
    col.className =
      " d-flex justify-content-between align-items-center rounded mb-2";
    const div = document.createElement("div");
    div.className = "d-flex";
    const divI = document.createElement("div");
    const divR = document.createElement("div");
    const img = document.createElement("img");
    img.src = x.data[i].album.cover_small;
    img.className = "rounded me-2";
    img.style = "width: 46px; height:46px";
    img.onclick = () => startPlayer(x.data[i]);
    const a = document.createElement("a");
    const an = document.createElement("a");
    const h5 = document.createElement("h5");
    h5.innerHTML = x.data[i].title;
    h5.className = "m-0";
    const p = document.createElement("p");
    p.className = "m-0";
    p.innerHTML = convertiSecondiInMinuti(x.data[i].duration);
    const span = document.createElement("span");
    span.innerHTML = x.data[i].artist.name;

    div.appendChild(img);
    a.appendChild(h5);
    an.appendChild(h5);
    divI.appendChild(a);
    divI.appendChild(an);
    if (x.data[i].explicit_lyrics === true) {
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
const Artist = (x) => {
  const row = document.createElement("div");
  row.className = "col-12 col-md-6 order-1 order-md-2";
  const col = document.createElement("div");
  col.className = " d-flex align-items-center";
  const div = document.createElement("div");
  div.className = "ms-3 d-flex align-items-center";
  const a = document.createElement("a");
  const img = document.createElement("img");
  img.className = "rounded-circle overflow-hidden img-fluid mb-3 mt-2";
  img.style = "width: 80px; height:80px";
  const h5 = document.createElement("h5");
  h5.className = "m-0";
  h5.style = "font-size: 1.2rem";
  const divT = document.createElement("div");
  /* divT.style = "width: 36px; heigth: 36px" */
  const h4 = document.createElement("h4");
  h4.innerText = "Brani che ti piacciono";
  const span = document.createElement("span");
  span.style = "font-size: .9rem";
  const divS = document.createElement("div");
  divS.className = "ms-2";

  img.src = x.data[1].contributors[0].picture_small;
  h5.innerText = "Hai messo mi piace a 11 bradi";
  span.innerHTML = "Di " + x.data[1].artist.name;

  a.appendChild(img);
  div.appendChild(a);
  divS.appendChild(h5);
  divS.appendChild(span);
  col.appendChild(div);
  col.appendChild(divS);
  divT.appendChild(h4);
  row.appendChild(divT);
  row.appendChild(col);
  container.appendChild(row);
};

const buttonPlay = document.getElementById("playIcon");
let isPlayings = false;
let audio;

buttonPlay.addEventListener("click", function (e) {
  e.preventDefault();

  const previewInLocal = localStorage.getItem("info");

  if (previewInLocal) {
    const object = JSON.parse(previewInLocal);

    if (audio) {
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
        isPlayings = false;
        return;
      }
    }

    audio = new Audio(object.preview);

    audio.play();
    isPlayings = true;

    audio.addEventListener("ended", onAudioEnded);
  }
});

function onAudioEnded() {
  isPlayings = false;
}

function convertiSecondiInMinuti(secondi) {
  const minuti = Math.floor(secondi / 60);
  const secondiResidui = secondi % 60;

  const secondoFormattato =
    secondiResidui < 10 ? "0" + secondiResidui : secondiResidui;

  return minuti + ":" + secondoFormattato;
}

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

const laodPage = () => {
  const item = JSON.parse(localStorage.getItem("info"));
  console.log(item);
  if (item) {
    startPlayer(item);
  }
};


