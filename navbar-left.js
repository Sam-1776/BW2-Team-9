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
let arr = [];

dataStorage = localStorage.getItem("data");
if (dataStorage) {
  arr = JSON.parse(dataStorage);
}

butIn.addEventListener("click", function (e) {
  if (!containsLetter(input.value)) {
    alert("Inserisci un valore nell'input");
    return;
  }
  arr.push(input.value);
  pushEl();
  localStorage.setItem("data", JSON.stringify(arr));
  input.value = "";
});

function containsLetter(str) {
  return /[a-zA-Z]/.test(str);
}

const pushEl = function () {
  for (i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    const butLi = document.createElement("a");
    const icon = document.createElement("i");
    icon.className = "bi bi-trash3-fill";
    butLi.appendChild(icon);
    const ulDiv = document.createElement("div");
    ul.appendChild(ulDiv);
    ulDiv.appendChild(li);
    ulDiv.appendChild(butLi);

    ulDiv.className = "d-flex justify-content-between";
    li.innerText = arr[i];
  }
};
pushEl();

const deleteLI = function () {};
