const main = document.querySelector("main");
const aside = document.querySelector("aside");
const listen = document.getElementById("listen");
const section = document.querySelector("section");
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
  aside.classList.remove("col-4");
  main.classList.remove("col-8");
};

btnF.onclick = () => {
  aside.classList.remove("translate");
  aside.classList.remove("d-none");
  aside.classList.add("d-block");
  aside.classList.add("col-4");
  main.className = "col-8";
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
