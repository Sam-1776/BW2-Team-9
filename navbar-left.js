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
  btn.forEach((element) => {
    const nameP = element.children[1].innerText;
    console.log(nameP);
    laodPagePlay(nameP);
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

const btn = document.querySelectorAll("#cardPlay");
console.log(btn);

btn.forEach((element) => {
  element.onclick = (element) => {
    console.log(element);
    const txt = element.srcElement.children[0].innerText;
    /* const txt = element.children[1].innerText */
    console.log(txt);
    const arr = JSON.parse(localStorage.getItem(txt));
    console.log("questo è l'array", arr);
    /* window.location.assign("./album.html?name=" + txt); */
    fetch(URL + txt, {
      headers: {
        "X-RapidAPI-Key": Key,
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((resp) => resp.json())
      .then((obj) => {
        console.log(obj);
        const play = JSON.parse(localStorage.getItem(txt));
        console.log(play);
        if (play != null) {
          localStorage.removeItem(txt);
          const a = [];
          for (let i = 0; i < 10; i++) {
            const element = obj.data[i];
            a.push(element);
            /* localStorage.setItem(txt, JSON.stringify(a)) */
            localStorage.setItem(txt, JSON.stringify(a));
            console.log("ciao");
          }
        } else {
          localStorage.removeItem(txt);
          const a = [];
          for (let i = 0; i < 10; i++) {
            const element = obj.data[i];
            a.push(element);
            /* localStorage.setItem(txt, JSON.stringify(a)) */
            localStorage.setItem(txt, JSON.stringify(a));
            console.log("ciao");
          }

          createListItem(ul, txt);
        }
      });
  };
});


const laodPagePlay = (x) => {
  const item = JSON.parse(localStorage.getItem(x));
  console.log(item);
  if (item) {
    createListItem(ul, x);
  }
};

/* localStorage.clear() */
