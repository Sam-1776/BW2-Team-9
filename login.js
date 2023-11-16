const button = document.getElementById("button-accesss");
const password = document.getElementById("password");
const email = document.getElementById("email");

button.addEventListener("click", function (e) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value === "" || password.value === "") {
    e.preventDefault();
    alert("Compila tutti i campi per accedere");
  } else if (!emailRegex.test(email.value)) {
    e.preventDefault();
    alert("Inserisci un indirizzo email valido");
  } else {
    window.location.href = "Homepage.html";
  }
});
