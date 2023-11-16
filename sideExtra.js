const main = document.getElementById("mainAside");
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
  main.classList.remove("col-md-7", "col-10");
  main.classList.add("col-md-9","col-12");
  capo.style.width = "75%"
};

btnF.onclick = () => {
  aside.classList.remove("translate");
  aside.classList.remove("d-none");
  aside.classList.add("d-block");
  aside.classList.add("col-2");
  main.classList.remove("col-md-9","col-12");
  main.classList.add("col-md-7", "col-10")
  capo.style.width = "58%"
};
