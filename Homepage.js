const search = document.getElementById("search");
console.log(search);
const buttonB = document.getElementById("backHome");
const barInput = document.getElementById("barSearch");
const newSection = document.getElementById("reSearch");

search.onclick = () => {
  const section1 = document.querySelector("section1");
  const section2 = document.querySelector("section2");
  newSection.classList.remove("d-none");
  barInput.classList.remove("d-none");
  console.log(section1);
  console.log(section2);
  section1.classList.add("d-none");
  section2.classList.add("d-none");
  buttonB.classList.add("active");
  buttonB.onclick = () => {
    window.location.assign("./Homepage.html");
    barInput.classList.add("d-none");
    newSection.classList.add("d-none");
  };
};

const URL = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

barInput.onchange = () => {
  const query = barInput.value;

  fetch(URL + query, {
    headers: {
      "X-RapidAPI-Key": "bdad29ac60mshb962def87bb8ae2p13c7acjsn8389c8071a1f",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((resp) => resp.json())
    .then((Obj) => {
      console.log(Obj);
      Artist(Obj);
      Brani(Obj);
    })
    .catch((err) => console.log(err));
};

const Artist = (x) => {
  const div = document.querySelector("#Ricerche");
  const col = document.createElement("div");
  col.className = "col-6 rounded";
  const a = document.createElement("a");
  const img = document.createElement("img");
  img.className = "rounded-circle overflow-hidden img-fluid";
  const h3 = document.createElement("h3");

  img.src = x.data[1].artist.picture_small;
  h3.innerText = x.data[1].artist.name;

  a.appendChild(img);
  col.appendChild(a);
  col.appendChild(h3);
  div.appendChild(col);
};
