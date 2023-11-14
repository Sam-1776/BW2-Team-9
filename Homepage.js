const search = document.getElementById("search")
console.log(search);
const buttonB = document.getElementById("backHome")
const barInput = document.getElementById("barSearch")
const newSection = document.getElementById("reSearch")

search.onclick = () =>{
    const section1 = document.querySelector("section1")
    const section2 = document.querySelector("section2")
    newSection.classList.remove("d-none")
    barInput.classList.remove("d-none")
    console.log(section1);
    console.log(section2);
    section1.classList.add("d-none")
    section2.classList.add("d-none")
    buttonB.classList.add("active")
    buttonB.onclick = () =>{
        window.location.assign("./Homepage.html")
        barInput.classList.add("d-none")
        newSection.classList.add("d-none")
    }
}