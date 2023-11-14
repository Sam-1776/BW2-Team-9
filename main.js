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
window.onload = () => {
section1CardsLoaded()
}

section1CardsLoaded = function () {
    
}
const card1Loaded = function () {
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
         // myfunc(song)
         console.log(song);
         
     })
     .catch(err =>
         console.error(err.message)
         )
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
         // myfunc(song)
         console.log(song);
         
     })
     .catch(err =>
         console.error(err.message)
         )
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
         // myfunc(song)
         console.log(song);
         
     })
     .catch(err =>
         console.error(err.message)
         )
     }
const card4Loaded = function () {
 fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=chris brown", {
     headers: {
         'X-RapidAPI-Key': '971f3683c1mshd0d96937de5880fp110e78jsn1242e8b2381c',
         'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
     }
 })
 .then(resp => {
     console.log(resp)
     return  resp.json() }) 
     .then(song => {
         // myfunc(song)
         console.log(song);
         
     })
     .catch(err =>
         console.error(err.message)
         )
     }
const card5Loaded = function () {
 fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=", {
     headers: {
         'X-RapidAPI-Key': '971f3683c1mshd0d96937de5880fp110e78jsn1242e8b2381c',
         'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
     }
 })
 .then(resp => {
     console.log(resp)
     return  resp.json() }) 
     .then(song => {
         // myfunc(song)
         console.log(song);
         
     })
     .catch(err =>
         console.error(err.message)
         )
     }

buttonSection2.onclick = function () {
    
    cardsSongsLoaded()
}
const cardsSongsLoaded = () => {
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
            cardsSongs(song)
            console.log(song);
            
        })
        .catch(err =>
            console.error(err.message)
            )
            
            function cardsSongs (songs) {
                cards2.innerHTML = "";
                           songs.data.forEach((song) => {
       cards2.innerHTML += `
       <div id="col-20">
       <div class="card h-100 text-bg-dark">
    <div class="card-img-top w-100 object-fit-cover p-3 shadow-sm w-25">
       <img src="${song.album.cover_medium}" class="card-img-top" alt="...">
       </div>
       <div class="card-body">
       <p class="card-text">Cantante:${song.artist.name}</br>Canzone:${song.album.title}</p>
       </div>
       </div>
       </div>
       `;
         });
                }
        
    }

    
