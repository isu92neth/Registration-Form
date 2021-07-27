const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const address = document.getElementById("address");
const contact = document.getElementById("contact");
const form = document.getElementById("registration");
const fnameError = document.getElementById("fnameError");
const lnameError = document.getElementById("lnameError");

const alphaLetters = /^[A-Za-z]+$/;

form.addEventListener("submit", (e) => {
  if (fname.value === "" || fname.value === null) {
    e.preventDefault();
    fnameError.innerText = "Required";
    console.log("requiirreeddd");
  }

  if (lname.value === "" || lname.value === null) {
    e.preventDefault();
    lnameError.innerText = "Required";
    console.log("requiirreeddd");
  }

  if (email.value === "" || email.value === null) {
    e.preventDefault();
    emailError.innerText = "Required";
    console.log("requiirreeddd");
  }

  if (contact.value === "" || contact.value === null) {
    e.preventDefault();
    contactError.innerText = "Required";
    console.log("requiirreeddd");
  }

  if (address.value === "" || address.value === null) {
    e.preventDefault();
    addressError.innerText = "Required";
    console.log("requiirreeddd");
  }
});

function hideError() {
  document.getElementById(this.id + "Error").innerHTML = "";
}

fname.onkeyup = hideError;
lname.onkeyup = hideError;
email.onkeyup = hideError;
contact.onkeyup = hideError;
address.onkeyup = hideError;
