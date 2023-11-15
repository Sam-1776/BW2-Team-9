const main = document.querySelector("#mainAside");
const aside = document.querySelector("aside");
const close = document.getElementById("close");
const capo = document.getElementById("header")
console.log(aside);
const btnF = document.getElementById("friends");

close.onclick = () => {
  aside.classList.add("translate");
  aside.classList.add("d-none");
  aside.classList.remove("d-block");
  aside.classList.remove("col-2");
  main.classList.remove("col-7");
  main.classList.add("col-9");
  capo.style.width = "75%"
};

btnF.onclick = () => {
  aside.classList.remove("translate");
  aside.classList.remove("d-none");
  aside.classList.add("d-block");
  aside.classList.add("col-2");
  main.classList.remove("col-9");
  main.classList.add("col-7")
  capo.style.width = "58%"
};
