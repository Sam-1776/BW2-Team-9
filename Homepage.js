const search = document.getElementById("search");
console.log(search);
const buttonB = document.getElementById("backHome");
const barInput = document.getElementById("barSearch");
const newSection = document.getElementById("reSearch");
const ricerca = document.getElementById("ricerca")

search.onclick = () => {
  const section1 = document.querySelector("#section1");
  const section2 = document.querySelector("#section2");
  newSection.classList.remove("d-none");
  barInput.classList.remove("d-none");
  console.log(section1);
  console.log(section2);
  section1.classList.add("d-none");
  section2.classList.add("d-none");
  buttonB.classList.add("active");
  const card = document.querySelectorAll(".cardSearch")
console.log(card);
card.forEach(element => {
  element.onclick = (element) =>{
    const txt = element.srcElement.children[0].innerText
    console.log(element.srcElement.children[0].innerText);
    console.log(txt);
    made(txt)
  }
});
  buttonB.onclick = () => {
    window.location.assign("./Homepage.html");
    barInput.classList.add("d-none");
    newSection.classList.add("d-none");
    ricerca.classList.add("d-none");
  };
};

const URL = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";
const Key = "68a8776b0bmsh6e2a39f98b70d75p1790aejsn95b31ef05b61"

barInput.onchange = () => {
  const query = barInput.value;
  ricerca.classList.remove("d-none")
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
    })
    .catch((err) => console.log(err));
};

const container = document.querySelector("#searchQ")
const Artist = (x) => {
  newSection.classList.add("d-none");
  const row = document.createElement("div");
  row.className = "col-5"
  const col = document.createElement("div");
  col.className = "rounded bg-dark";
  col.style = "height: 216px"
  const div = document.createElement("div")
  div.className = "m-3"
  const a = document.createElement("a");
  const img = document.createElement("img");
  img.className = "rounded-circle overflow-hidden img-fluid mb-3 mt-2";
  img.style = "width: 80px; height:80px"
  const h3 = document.createElement("h3");
  h3.className = "fw-bold"
  const divT = document.createElement("div");
  /* divT.style = "width: 36px; heigth: 36px" */
  const h4 = document.createElement("h4")
  h4.innerText = "Risultato più rilevante"
  const span = document.createElement("span")
  span.className = "badge text-ligth rounded-pill"
  span.style = "background-color: #121212"

  img.src = x.data[1].artist.picture_small;
  h3.innerText = x.data[1].artist.name;
  span.innerHTML = x.data[1].artist.type;


  a.appendChild(img);
  div.appendChild(a);
  div.appendChild(h3);
  div.appendChild(span);
  col.appendChild(div)
  divT.appendChild(h4)
  row.appendChild(divT)
  row.appendChild(col);
  container.appendChild(row)
};


const Brani = (x) =>{
  const row = document.createElement("div");
  row.className = "col-6"
  const divT = document.createElement("div");
  divT.className = "mb-3"
  const h4 = document.createElement("h4")
  h4.innerText = "Brani"
  divT.appendChild(h4)
  row.appendChild(divT)
  for (let i = 0; i < 4; i++) {
    const j = Math.floor(Math.random() * 25)
    console.log(j);
    const col = document.createElement("div");
    col.className = " d-flex justify-content-between align-items-center rounded mb-2";
    const div = document.createElement("div")
    div.className = "d-flex"
    const divI = document.createElement("div")
    const divR = document.createElement("div")
    const img = document.createElement("img");
    img.src = x.data[j].album.cover_small
    img.className = "rounded me-2"
    img.style = "width: 46px; height:46px"
    const a = document.createElement("a");
    const an = document.createElement("a");
    const h5 = document.createElement("h5")
    h5.innerHTML = x.data[j].title
    h5.className = "m-0"
    const p = document.createElement("p")
    p.className = "m-0"
    p.innerHTML =  x.data[j].duration
    const span = document.createElement("span")
    span.innerHTML = x.data[j].artist.name


    div.appendChild(img)
    a.appendChild(h5)
    an.appendChild(h5)
    divI.appendChild(a)
    divI.appendChild(an)
    if (x.data[j].explicit_lyrics === true) {
      const i = document.createElement("i")
      i.className = "bi bi-explicit-fill d-inline-block me-2"
      divI.appendChild(i);
    }
    divI.appendChild(span)
    div.appendChild(divI)
    
    
    col.appendChild(div)
    divR.appendChild(p)
    col.appendChild(divR)
    row.appendChild(col);
    
  };
  
  
  container.appendChild(row)
}

const made = (x) =>{
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
      generateNewC(Obj, x)
    })
    .catch((err) => console.log(err));
}


const generateNewC = (x, str) =>{
  console.log(str);
  newSection.classList.add("d-none");
  const container = document.getElementById("searchC")
  const row = document.createElement("div")
  row.className = "row"
  const h2 = document.createElement("h2")
  h2.innerText = str
  h2.className = "fs-1 mb-4"
  for (let i = 0; i < 16; i++) {
    const col = document.createElement("div")
    col.className = "col-3 mb-3"
    const card = document.createElement("div")
    card.className = "card "
   /*  card.style = "height: 200px" */
    card.style ="background-color: #212529 "
    const divF =document.createElement("div")
    divF.className = "d-flex justify-content-center align-items-center card-img-top mt-3"
    divF.style = "width: 80%; margin: auto"
    const img = document.createElement("img")
    img.className = "card-img-top rounded shadow img-fluid"
    img.src = x.data[i].album.cover_medium
    img.style = "width: 100%"
    const body = document.createElement("div")
    body.className = "card-body"
    const aA = document.createElement("a")
    aA.onclick = () =>{
      window.location.assign("./album.html?id=" + x.data[i].album.id)
    }
    const h5 = document.createElement("h5")
    h5.className = "card-title text-light"
    h5.innerText = x.data[i].title
    const aArt = document.createElement("a")
    aArt.onclick = () =>{
      window.location.assign("./artist.html?id=" + x.data[i].artist.id)
    }
    const p = document.createElement("p")
    p.className = "card-text text-light"
    p.innerText = x.data[i].artist.name

    aArt.appendChild(p)
    aA.appendChild(h5)
    body.appendChild(aA)
    body.appendChild(aArt)
    divF.appendChild(img)
    card.appendChild(divF)
    card.appendChild(body)
    col.appendChild(card)
    row.appendChild(col)

  }

  container.appendChild(h2)
  container.appendChild(row)
}

