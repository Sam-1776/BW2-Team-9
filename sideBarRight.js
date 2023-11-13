const main = document.querySelector("main")
const aside = document.querySelector("aside")
console.log(aside);

const btnAdd = document.getElementById("add-Friends")
console.log(btnAdd);
const btnBack = document.getElementById("back")
const canvas = document.querySelector(".offcanvas")

btnAdd.onclick = () =>{
  aside.classList.remove("translate")
  aside.classList.remove("display")
  aside.classList.remove("d-none")
  aside.classList.add("d-block")
  aside.classList.add("col-4")
  main.className = "col-8"
}

btnBack.onclick = () =>{
  aside.classList.add("translate")
  aside.classList.add("display")
  aside.classList.add("d-none")
  aside.classList.remove("col-4")
  main.classList.remove("col-8")
}