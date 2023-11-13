const main = document.querySelector("#mainAside");
const aside = document.querySelector("aside");
const listen = document.getElementById("listen");
const section = document.querySelector("#sectionAside");
const close = document.getElementById("close");
console.log(aside);

const btnAdd = document.getElementById("add-Friends");
console.log(btnAdd);
const btnBack = document.getElementById("back");
const btnF = document.getElementById("friends");

close.onclick = () => {
  aside.classList.add("translate");
  aside.classList.add("d-none");
  aside.classList.remove("d-block");
  aside.classList.remove("col-2");
  main.classList.remove("col-7");
  main.classList.add("col-9");
};

btnF.onclick = () => {
  aside.classList.remove("translate");
  aside.classList.remove("d-none");
  aside.classList.add("d-block");
  aside.classList.add("col-2");
  main.classList.remove("col-9");
  main.classList.add("col-7")
};

btnAdd.onclick = () => {
  section.classList.remove("translate");
  section.classList.remove("d-none");
  section.classList.add("d-block");
  listen.classList.add("d-none");
};

btnBack.onclick = () => {
  section.classList.add("translate");

  section.classList.add("d-none");
  section.classList.remove("d-block");
  listen.classList.remove("d-none");
};
