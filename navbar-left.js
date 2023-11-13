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

// Carica gli elementi dal localStorage al caricamento della pagina
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
}

function getStoredData() {
  return JSON.parse(localStorage.getItem("data")) || [];
}

function deleteElement(value) {
  const storedData = getStoredData();
  const indexToRemove = storedData.indexOf(value);

  if (indexToRemove !== -1) {
    storedData.splice(indexToRemove, 1);
    localStorage.setItem("data", JSON.stringify(storedData));

    const elementsToRemove = document.querySelectorAll(
      `li:contains('${value}')`
    );
    elementsToRemove.forEach(function (element) {
      element.parentNode.remove();
    });
  }
}
