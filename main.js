// BOTTONE "Visualizza tutto"
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=tyga", {
  headers: {
    "X-RapidAPI-Key": "68a8776b0bmsh6e2a39f98b70d75p1790aejsn95b31ef05b61",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Errore durante la richiesta:", error));

const buttonSection2 = document.getElementById("buttonSection2");
const cards2 = document.getElementById("cards2");
cards2.setAttribute("id", "cards");
const cards = document.getElementById("cards");
const cards1 = document.getElementById("cards1");
const cardsSection2 = document.getElementById("col-20");
const header = document.getElementById("header");

window.onload = () => {
  section2CardsLoaded();
  carouselDynamic();
  buttonSection2.onclick = function () {
    cardsSongsLoaded();
  };
};

const carouselDynamic = function () {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=hip-pop", {
    headers: {
      "X-RapidAPI-Key": "68a8776b0bmsh6e2a39f98b70d75p1790aejsn95b31ef05b61",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .then((song) => {
      carouselLoaded(song);
      console.log(song);
    })
    .catch((err) => console.error(err.message));

  const carouselLoaded = function (carousel) {
    const randomNum = Math.floor(Math.random() * (carousel.data.length - 1));

    const randomSong1 = carousel.data[randomNum];
    const randomSong2 = carousel.data[randomNum];
    const randomSong3 = carousel.data[randomNum];
    const currentCoverAlbum1 = randomSong1.album.cover_medium;
    const currentCoverAlbum2 = randomSong2.album.cover_medium;
    const currentCoverAlbum3 = randomSong3.album.cover_medium;
    const currentTitle1 = randomSong1.title;
    const currentTitle2 = randomSong2.title;
    const currentTitle3 = randomSong3.title;
    const currentArtist1 = randomSong1.artist.name;
    const currentArtist2 = randomSong2.artist.name;
    const currentArtist3 = randomSong3.artist.name;

    // header.innerHTML =`
    //                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    //         <div class="carousel-inner">
    //           <div class="carousel-item active">
    //             <img class="d-block w-100" src="${currentCoverAlbum1}" alt="First slide">
    //           </div>
    //           <div class="carousel-item">
    //             <img class="d-block w-100" src="${currentCoverAlbum2}" alt="Second slide">
    //           </div>
    //           <div class="carousel-item">
    //             <img class="d-block w-100" src="${currentCoverAlbum3}" alt="Third slide">
    //           </div>
    //         </div>
    //         <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    //           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //           <span class="sr-only">Previous</span>
    //         </a>
    //         <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    //           <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //           <span class="sr-only">Next</span>
    //         </a>
    //       </div>
    //                   `
  };
};

const cardsSongsLoaded = () => {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=hip-pop", {
    headers: {
      "X-RapidAPI-Key": "68a8776b0bmsh6e2a39f98b70d75p1790aejsn95b31ef05b61",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .then((song) => {
      cardsSongs(song);
      console.log(song);
    })
    .catch((err) => console.error(err.message));

  function cardsSongs(songs) {
    cards2.innerHTML = "";
    for (let i = 0; i < 20; i++) {
      const imgAlbumMedium = songs.data[i].album.cover_medium;
      const currentSinger = songs.data[i].artist.name;
      const currentAlbum = songs.data[i].album.title;
      const currentId = songs.data[i].album.id;
      cards2.innerHTML += `
       <div id="col-20">
       <div class="card h-100 text-bg-dark">
<a href="./album.html?id=${currentId}">
    <div class="card-img-top w-100 object-fit-cover p-3 shadow-sm w-25">
       <img src="${imgAlbumMedium}" class="card-img-top" alt="...">
       </div>
       </a>
       <div class="card-body">
       <p class="card-text"><a href="./artist.html?id=${currentId}">Cantante: ${currentSinger}</a></br><a href="./album.html?id=${currentId}">Album: ${currentAlbum}</a></p>
       </div>
       </div>
       </div>
       `;
    }
  }
};

section2CardsLoaded = function () {
  const card1Loaded = () => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
      headers: {
        "X-RapidAPI-Key": "68a8776b0bmsh6e2a39f98b70d75p1790aejsn95b31ef05b61",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((song) => {
        currentSong(song);
        console.log(song);
      })
      .catch((err) => console.error(err.message));

    function currentSong(eminem) {
      const randomNum = Math.floor(Math.random() * (eminem.data.length - 1));
      const randomSong = eminem.data[randomNum];
      const currentCoverAlbum = randomSong.album.cover_medium;
      const currentTitle = randomSong.title;
      const currentArtist = randomSong.artist.name;
      const currentId = randomSong.album.id;

      cards1.innerHTML += `
                   <div id="col-20">
                   <div class="card h-100 rounded text-bg-dark" style="border:1px solid #181818;">
                   <a href="./currentAlbum.html?id=${currentId}">
                     <div class="card-img-top w-100 object-fit-cover p-3 shadow-sm w-25">
                       <img src="${currentCoverAlbum}" class="card-img-top" alt="...">
                     </div>
                     </a>
                       <div class="card-body">
                         <p class="card-text"><a href="./artist.html?id=${currentId}">Canatante: ${currentArtist}</a></p>
                         <p class="card-text"><a href="./album.html?id=${currentId}">Canzone: ${currentTitle}</a></p>
                       </div>
                     </div>
                   </div> 
                   `;
    }
  };
  const card2Loaded = function () {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=rihanna", {
      headers: {
        "X-RapidAPI-Key": "68a8776b0bmsh6e2a39f98b70d75p1790aejsn95b31ef05b61",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((song) => {
        currentSong(song);
        console.log(song);
      })
      .catch((err) => console.error(err.message));

    function currentSong(rihanna) {
      const randomNum = Math.floor(Math.random() * (rihanna.data.length - 1));
      const randomSong = rihanna.data[randomNum];
      const currentCoverAlbum = randomSong.album.cover_medium;
      const currentTitle = randomSong.title;
      const currentArtist = randomSong.artist.name;
      const currentId = randomSong.album.id;
      cards1.innerHTML += `
                   <div id="col-20">
                   <div class="card h-100 rounded text-bg-dark" style="border:1px solid #181818;">
                   <a href="./currentAlbum.html?id=${currentId}">
                     <div class="card-img-top w-100 object-fit-cover p-3 shadow-sm w-25">
                       <img src="${currentCoverAlbum}" class="card-img-top" alt="...">
                     </div>
                     </a>
                       <div class="card-body">
                         <p class="card-text"><a href="./artist.html?id=${currentId}">Canatante: ${currentArtist}</a></p>
                         <p class="card-text"><a href="./album.html?id=${currentId}">Canzone: ${currentTitle}</a></p>
                       </div>
                     </div>
                   </div> 
                   `;
    }
  };
  const card3Loaded = function () {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=tyga", {
      headers: {
        "X-RapidAPI-Key": "68a8776b0bmsh6e2a39f98b70d75p1790aejsn95b31ef05b61",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((song) => {
        currentSong(song);
        console.log(song);
      })
      .catch((err) => console.error(err.message));

    function currentSong(tyga) {
      const randomNum = Math.floor(Math.random() * (tyga.data.length - 1));
      const randomSong = tyga.data[randomNum];
      const currentCoverAlbum = randomSong.album.cover_medium;
      const currentTitle = randomSong.title;
      const currentArtist = randomSong.artist.name;
      const currentId = randomSong.album.id;
      cards1.innerHTML += `
                   <div id="col-20">
                   <div class="card h-100 rounded text-bg-dark" style="border:1px solid #181818;">
                   <a href="./currentAlbum.html?id=${currentId}">
                     <div class="card-img-top w-100 object-fit-cover p-3 shadow-sm w-25">
                       <img src="${currentCoverAlbum}" class="card-img-top" alt="...">
                     </div>
                     </a>
                       <div class="card-body">
                         <p class="card-text"><a href="./artist.html?id=${currentId}">Canatante: ${currentArtist}</a></p>
                         <p class="card-text"><a href="./album.html?id=${currentId}">Canzone: ${currentTitle}</a></p>
                       </div>
                     </div>
                   </div> 
                   `;
    }
  };
  const card4Loaded = function () {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=future", {
      headers: {
        "X-RapidAPI-Key": "68a8776b0bmsh6e2a39f98b70d75p1790aejsn95b31ef05b61",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((song) => {
        currentSong(song);
        console.log(song);
      })
      .catch((err) => console.error(err.message));

    function currentSong(future) {
      const randomNum = Math.floor(Math.random() * (future.data.length - 1));
      const randomSong = future.data[randomNum];
      const currentCoverAlbum = randomSong.album.cover_medium;
      const currentTitle = randomSong.title;
      const currentArtist = randomSong.artist.name;
      const currentId = randomSong.album.id;
      cards1.innerHTML += `
                   <div id="col-20">
                   <div class="card h-100 rounded text-bg-dark" style="border:1px solid #181818;">
                   <a href="./currentAlbum.html?id=${currentId}">
                     <div class="card-img-top w-100 object-fit-cover p-3 shadow-sm w-25">
                       <img src="${currentCoverAlbum}" class="card-img-top" alt="...">
                     </div>
                     </a>
                       <div class="card-body">
                         <p class="card-text"><a href="./artist.html?id=${currentId}">Canatante: ${currentArtist}</a></p>
                         <p class="card-text"><a href="./album.html?id=${currentId}">Canzone: ${currentTitle}</a></p>
                       </div>
                     </div>
                   </div> 
                   `;
    }
  };
  const card5Loaded = function () {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=akon", {
      headers: {
        "X-RapidAPI-Key": "68a8776b0bmsh6e2a39f98b70d75p1790aejsn95b31ef05b61",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((song) => {
        currentSong(song);
        console.log(song);
      })
      .catch((err) => console.error(err.message));

    function currentSong(akon) {
      const randomNum = Math.floor(Math.random() * (akon.data.length - 1));
      const randomSong = akon.data[randomNum];
      const currentCoverAlbum = randomSong.album.cover_medium;
      const currentTitle = randomSong.title;
      const currentArtist = randomSong.artist.name;
      const currentId = randomSong.album.id;
      cards1.innerHTML += `
                   <div id="col-20">
                   <div class="card h-100 rounded text-bg-dark" style="border:1px solid #181818;">
                   <a href="./currentAlbum.html?id=${currentId}">
                     <div class="card-img-top w-100 object-fit-cover p-3 shadow-sm w-25">
                       <img src="${currentCoverAlbum}" class="card-img-top" alt="...">
                     </div>
                     </a>
                       <div class="card-body">
                         <p class="card-text"><a href="./artist.html?id=${currentId}">Canatante: ${currentArtist}</a></p>
                         <p class="card-text"><a href="./album.html?id=${currentId}">Canzone: ${currentTitle}</a></p>
                       </div>
                     </div>
                   </div> 
                   `;
    }
  };
  card5Loaded();
  card4Loaded();
  card3Loaded();
  card2Loaded();
  card1Loaded();
};
