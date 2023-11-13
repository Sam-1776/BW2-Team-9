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
       <div class="card bg-secondary text-white">
       <img src="${song.picture_medium}" class="card-img-top" alt="...">
       <div class="card-body">
       <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, quae.</p>
       </div>
       </div>
       </div>
       `;
         });
                }
        
    }
    
