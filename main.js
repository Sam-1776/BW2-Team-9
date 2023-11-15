// BOTTONE "Visualizza tutto"
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=hip-pop", {
    headers: {
        'X-RapidAPI-Key': '971f3683c1mshd0d96937de5880fp110e78jsn1242e8b2381c',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
})
.then((response) => response.json())
.then((data) => {

    console.log(data);
  })
  .catch((error) => console.error("Errore durante la richiesta:", error));

const buttonSection2 = document.getElementById("buttonSection2")
const cards2 = document.getElementById("cards2")
cards2.setAttribute("id","cards")
const cards = document.getElementById("cards")
const cards1 = document.getElementById("cards1")
const cardsSection2 = document.getElementById("col-20")
const header = document.getElementById("header")
const advertisementContainer = document.getElementById("advertisementContainer")

window.onload = () => {
  section2CardsLoaded()
  headerloaded()
buttonSection2.onclick = function () {
    cardsSongsLoaded()
}
}

const headerloaded = function () {
  const advertismentLoading = () => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=hip-pop", {
        headers: {
            'X-RapidAPI-Key': '971f3683c1mshd0d96937de5880fp110e78jsn1242e8b2381c',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    })
    .then(resp => {
        console.log(resp)
        return  resp.json() }) 
        .then(song => {
            currentPlaylist(song)
            console.log(song);
            
        })
        .catch(err =>
            console.error(err.message)
            )
            
            function currentPlaylist(current) {
                const randomNum = Math.floor(Math.random() * (current.data.length - 1));
          const randomSong = current.data[randomNum];
               const currentCoverAlbum = randomSong.album.cover_medium;
               const currentTitle = randomSong.title;
               const currentPlayed = randomSong.album.title;
               const currentArtist = randomSong.artist.name;
               const currentId = randomSong.album.id;
               const containerText = ["Canzone del momento", "Ascolta di nuovo", "Ascoltato recentemente"];
               const randomPosition = Math.floor(Math.random() * (containerText.length));
const randomText = containerText[randomPosition]
               advertisementContainer.innerHTML +=`
               <div class="col-12 d-flex flex-column flex-md-row p-3 rounded" id="advertisementContainer">
               <div class="col-md-2 col-12 me-3 py-5">
                 <img src="${currentCoverAlbum}" alt="" class="img-fluid">
               </div>
               <div class="d-flex flex-column justify-content-between" id="textAndButton-Container">
                 <div>
                 <h5>${currentTitle}</h5>
                 <h1 class="display-1">${currentPlayed}</h1>
                 <p class="h3"><a href="./artist.html?id=${currentId}">${currentArtist}</a></p>
                 <p class="h4">${randomText}</p>
               </div>
               <div>
  <button>PLAY</button>
  <button>SALVA</button>
</div>
               </div>
                     </div>
               `
}
}
advertismentLoading()
}

const cardsSongsLoaded = () => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=hip-pop", {
        headers: {
            'X-RapidAPI-Key': '68a8776b0bmsh6e2a39f98b70d75p1790aejsn95b31ef05b61',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    })
    .then(resp => {
        console.log(resp)
        return  resp.json() }) 
        .then(song => {
            cardsSongs(song)
            console.log(song);
            
        })
        .catch(err =>
            console.error(err.message)
            )
            
            function cardsSongs (songs) {
                cards2.innerHTML = "";
                          for( let i = 0; i < 20; i++) {
                            
                            const imgAlbumMedium = songs.data[i].album.cover_medium;
                            const currentSinger = songs.data[i].artist.name;
                            const currentAlbum = songs.data[i].album.title;
                            const currentId = songs.data[i].album.id;
       cards2.innerHTML += `
       <div class="col-md-auto col-12">
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
    const cardsLoaded = () => {
        fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=hip-pop", {
            headers: {
                'X-RapidAPI-Key': '68a8776b0bmsh6e2a39f98b70d75p1790aejsn95b31ef05b61',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        })
        .then(resp => {
            console.log(resp)
            return  resp.json() }) 
            .then(song => {
                current1Song(song)
                current2Song(song)
                current3Song(song)
                current4Song(song)
                current5Song(song)
                console.log(song);
                
            })
            .catch(err =>
                console.error(err.message)
                )
                
                function current1Song (songs) {
                    const randomNum = Math.floor(Math.random() * (songs.data.length - 1));
                   const randomSong = songs.data[randomNum];
                   const currentCoverAlbum = randomSong.album.cover_medium;
                   const currentTitle = randomSong.title;
                   const currentArtist = randomSong.artist.name;
                   const currentId = randomSong.album.id;
                   
                   cards1.innerHTML +=`
                   <div class="col-md-auto col-12">
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
                function current2Song (songs) {
                    const randomNum = Math.floor(Math.random() * (songs.data.length - 1));
                   const randomSong = songs.data[randomNum];
                   const currentCoverAlbum = randomSong.album.cover_medium;
                   const currentTitle = randomSong.title;
                   const currentArtist = randomSong.artist.name;
                   const currentId = randomSong.album.id;
                   
                   cards1.innerHTML +=`
                   <div class="col-md-auto col-12">
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
                function current3Song (songs) {
                    const randomNum = Math.floor(Math.random() * (songs.data.length - 1));
                   const randomSong = songs.data[randomNum];
                   const currentCoverAlbum = randomSong.album.cover_medium;
                   const currentTitle = randomSong.title;
                   const currentArtist = randomSong.artist.name;
                   const currentId = randomSong.album.id;
                   
                   cards1.innerHTML +=`
                   <div class="col-md-auto col-12">
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
                function current4Song (songs) {
                    const randomNum = Math.floor(Math.random() * (songs.data.length - 1));
                   const randomSong = songs.data[randomNum];
                   const currentCoverAlbum = randomSong.album.cover_medium;
                   const currentTitle = randomSong.title;
                   const currentArtist = randomSong.artist.name;
                   const currentId = randomSong.album.id;
                   
                   cards1.innerHTML +=`
                   <div class="col-md-auto col-12">
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
                function current5Song (songs) {
                    const randomNum = Math.floor(Math.random() * (songs.data.length - 1));
                   const randomSong = songs.data[randomNum];
                   const currentCoverAlbum = randomSong.album.cover_medium;
                   const currentTitle = randomSong.title;
                   const currentArtist = randomSong.artist.name;
                   const currentId = randomSong.album.id;
                   
                   cards1.innerHTML +=`
                   <div class="col-md-auto col-12">
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
  cardsLoaded();
};
