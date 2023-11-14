// BOTTONE "Visualizza tutto"
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=tyga", {
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

window.onload = () => {
section2CardsLoaded()
buttonSection2.onclick = function () {
    
    cardsSongsLoaded()
}

}
const cardsSongsLoaded = () => {
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
                            const currentId = songs.data[i].id;
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
         }}
}

section2CardsLoaded = function () {
    const card1Loaded = () => {
        fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
            headers: {
                'X-RapidAPI-Key': '971f3683c1mshd0d96937de5880fp110e78jsn1242e8b2381c',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        })
        .then(resp => {
            console.log(resp)
            return  resp.json() }) 
            .then(song => {
                currentSong(song)
                console.log(song);
                
            })
            .catch(err =>
                console.error(err.message)
                )
                
                function currentSong (eminem) {
                    const randomNum = Math.floor(Math.random() * (eminem.data.length - 1));
                   const randomSong = eminem.data[randomNum];
                   const currentCoverAlbum = randomSong.album.cover_medium;
                   const currentTitle = randomSong.title;
                   const currentArtist = randomSong.artist.name;
                   const currentId = randomSong.id;
                   
                   cards1.innerHTML +=`
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
                   `
    }
} 
    const card2Loaded = function () {
        fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=rihanna", {
            headers: {
                'X-RapidAPI-Key': '971f3683c1mshd0d96937de5880fp110e78jsn1242e8b2381c',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        })
        .then(resp => {
            console.log(resp)
            return  resp.json() }) 
            .then(song => {
                currentSong(song)
                console.log(song);
                
            })
            .catch(err =>
                console.error(err.message)
                )
                
                function currentSong (rihanna) {
                    const randomNum = Math.floor(Math.random() * (rihanna.data.length - 1));
                   const randomSong = rihanna.data[randomNum];
                   const currentCoverAlbum = randomSong.album.cover_medium;
                   const currentTitle = randomSong.title;
                   const currentArtist = randomSong.artist.name;
                   const currentId = randomSong.id;
                   cards1.innerHTML +=`
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
                   `
    }
         }
    const card3Loaded = function () {
        fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=tyga", {
            headers: {
                'X-RapidAPI-Key': '971f3683c1mshd0d96937de5880fp110e78jsn1242e8b2381c',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        })
        .then(resp => {
            console.log(resp)
            return  resp.json() }) 
            .then(song => {
                currentSong(song)
                console.log(song);
                
            })
            .catch(err =>
                console.error(err.message)
                )
                
                function currentSong (tyga) {
                    const randomNum = Math.floor(Math.random() * (tyga.data.length - 1));
                   const randomSong = tyga.data[randomNum];
                   const currentCoverAlbum = randomSong.album.cover_medium;
                   const currentTitle = randomSong.title;
                   const currentArtist = randomSong.artist.name;
                   const currentId = randomSong.id;
                   cards1.innerHTML +=`
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
                   `
    }
         }
    const card4Loaded = function () {
      fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=future", {
            headers: {
                'X-RapidAPI-Key': '971f3683c1mshd0d96937de5880fp110e78jsn1242e8b2381c',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        })
        .then(resp => {
            console.log(resp)
            return  resp.json() }) 
            .then(song => {
                currentSong(song)
                console.log(song);
                
            })
            .catch(err =>
                console.error(err.message)
                )
                
                function currentSong (future) {
                    const randomNum = Math.floor(Math.random() * (future.data.length - 1));
                   const randomSong = future.data[randomNum];
                   const currentCoverAlbum = randomSong.album.cover_medium;
                   const currentTitle = randomSong.title;
                   const currentArtist = randomSong.artist.name;
                   const currentId = randomSong.id;
                   cards1.innerHTML +=`
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
                   `
         }
        }
    const card5Loaded = function () {
        fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=akon", {
            headers: {
                'X-RapidAPI-Key': '971f3683c1mshd0d96937de5880fp110e78jsn1242e8b2381c',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        })
        .then(resp => {
            console.log(resp)
            return  resp.json() }) 
            .then(song => {
                currentSong(song)
                console.log(song);
                
            })
            .catch(err =>
                console.error(err.message)
                )
                
                function currentSong (akon) {
                    const randomNum = Math.floor(Math.random() * (akon.data.length - 1));
                   const randomSong = akon.data[randomNum];
                   const currentCoverAlbum = randomSong.album.cover_medium;
                   const currentTitle = randomSong.title;
                   const currentArtist = randomSong.artist.name;
                   const currentId = randomSong.id;
                   cards1.innerHTML +=`
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
                   `
         }
        }
        card5Loaded()
         card4Loaded()
         card3Loaded()
         card2Loaded()
         card1Loaded()   
        }
    
        cardsSection2.onclick = () => {

        }
        


    
