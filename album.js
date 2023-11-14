const param = new URLSearchParams(window.location.search);
console.log(param);
const productId = param.get("id");
console.log("RESOURCE ID: ", productId);

if (productId) {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + productId, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bdad29ac60mshb962def87bb8ae2p13c7acjsn8389c8071a1f",
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
      img = document.createElement("img");
      header.appendChild(div);
      h1 = document.createElement("h1");
      header.appendChild(h1);
      h1.innerText = "ciao";
      img.src = data.cover_medium;
      div.appendChild(img);
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
