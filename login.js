const button = document.getElementById("button-accesss");
const password = document.getElementById("password");
const email = document.getElementById("email");
button.addEventListener("click", function (e) {
  if (email.value === "" || password.value === "") {
    e.preventDefault();
    alert("Colpila i campi di accesso per accedere");
    button.disabled();
    e.preventDefault();
  } else {
    window.location = "Homepage.html";
  }
});
