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

window.onload = () => {
section1CardsLoaded()
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
       <div class="card h-100 rounded text-bg-secondary">
    <div class="card-img-top w-100 object-fit-cover rounded shadow-sm w-25">
       <img src="${song.album.cover_medium}" class="card-img-top" alt="...">
       </div>
       <div class="card-body">
       <p class="card-text">Cantante: ${song.artist.name}</p>
       <p class="card-text">Canzone: ${song.album.title}</p>
       </div>
       </div>
       </div>
       `;
         });
                }
        
    }

    
