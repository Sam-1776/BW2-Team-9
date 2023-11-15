const param = new URLSearchParams(window.location.search);
console.log(param);
const productId = param.get("id");
console.log("RESOURCE ID: ", productId);

if (productId) {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + productId, {
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
    .then((data) => {
      console.log("API Response:", data);
      const div = document.createElement("div");
      const header = document.getElementById("header-snd");
      const img = document.createElement("img");

      const divText = document.createElement("div");
      const h5 = document.createElement("h5");
      divText.appendChild(h5);
      h5.innerText = "ALBUM";
      albumP = document.createElement("p");
      albumP.innerText = data.artist.name + " released " + data.release_date;

      h1 = document.createElement("h1");
      h1.innerText = data.title;

      img.src = data.cover_medium;
      div.appendChild(img);
      img.className = "img-album";
      div.className = "div-album";
      divText.appendChild(h1);
      divText.appendChild(albumP);
      divText.className = "div-text";

      const divTotal = document.createElement("div");
      header.appendChild(divTotal);
      divTotal.appendChild(div);
      divTotal.appendChild(divText);
      divTotal.className = "album-header";
      const ol = document.getElementById("ol");

      data.tracks.data.forEach((song) => {
        console.log(song);
        const li = document.createElement("li");
        li.innerText = song.title;
        ol.appendChild(li);
        li.className = "li-track";

        const olsnd = document.getElementById("ol-nd");
        const liNd = document.createElement("li");
        liNd.innerText = song.rank;
        olsnd.appendChild(liNd);
        liNd.className = "li-track";
        function convertiSecondiInMinuti(secondi) {
          const minuti = Math.floor(secondi / 60);
          const secondiResidui = secondi % 60;

          const secondoFormattato =
            secondiResidui < 10 ? "0" + secondiResidui : secondiResidui;

          return minuti + ":" + secondoFormattato;
        }

        const olsec = document.getElementById("secondi");
        const liSec = document.createElement("li");
        liSec.innerText = convertiSecondiInMinuti(song.duration);
        olsec.appendChild(liSec);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

const input = document.querySelector(".input");
const anchor = document.getElementById("anchor");
const divinput = document.getElementById("div-input");
const butIn = document.getElementById("input-button");

anchor.addEventListener("click", function (e) {
  e.preventDefault();
  if (!input.classList.contains("input-block")) {
    input.classList.add("input-block");
    butIn.classList.add("input-button");
  } else {
    input.classList.remove("input-block");
    butIn.classList.remove("input-button");
  }
});

const ul = document.getElementById("ul");

document.addEventListener("DOMContentLoaded", function () {
  const storedData = JSON.parse(localStorage.getItem("data")) || [];
  storedData.forEach(function (value) {
    createListItem(ul, value);
  });
});

butIn.addEventListener("click", function () {
  if (!containsLetter(input.value)) {
    alert("Inserisci un valore nell'input");
    return;
  }
  const value = input.value;

  const storedData = getStoredData();
  storedData.push(value);
  localStorage.setItem("data", JSON.stringify(storedData));

  input.value = "";
  createListItem(ul, value);
});

function containsLetter(str) {
  return /[a-zA-Z]/.test(str);
}

function createListItem(ul, value) {
  const li = document.createElement("li");
  const butLi = document.createElement("a");
  const icon = document.createElement("i");

  icon.className = "bi bi-trash3-fill text-danger";
  butLi.appendChild(icon);
  const ulDiv = document.createElement("div");
  ul.appendChild(ulDiv);
  ulDiv.appendChild(li);
  ulDiv.appendChild(butLi);

  ulDiv.className = "d-flex justify-content-between mx-2 ";

  li.innerText = value;
  butLi.addEventListener("click", function () {
    const valueToRemove = li.innerText;
    const storedData = getStoredData();
    const indexToRemove = storedData.indexOf(valueToRemove);
    if (indexToRemove !== -1) {
      let conferma = confirm("Sei sicuro di eliminare la playlist?");
      if (conferma) {
        alert("Playlist cancellata con successo");
        storedData.splice(indexToRemove, 1);
        localStorage.setItem("data", JSON.stringify(storedData));

        if (ulDiv) {
          ul.removeChild(ulDiv);
        }
      } else {
        alert("Playlist trattenuta");
      }
    }
  });
}

function getStoredData() {
  return JSON.parse(localStorage.getItem("data")) || [];
}

const main = document.querySelector("#mainAside");
const aside = document.querySelector("aside");
const close = document.getElementById("close");
const header = document.getElementById("header");
console.log(aside);
const btnF = document.getElementById("friends");

close.onclick = () => {
  aside.classList.add("translate");
  aside.classList.add("d-none");
  aside.classList.remove("d-block");
  aside.classList.remove("col-2");
  main.classList.remove("col-7");
  main.classList.add("col-9");
  header.style.width = "75%";
};

btnF.onclick = () => {
  aside.classList.remove("translate");
  aside.classList.remove("d-none");
  aside.classList.add("d-block");
  aside.classList.add("col-2");
  main.classList.remove("col-9");
  main.classList.add("col-7");
  header.style.width = "58%";
};
