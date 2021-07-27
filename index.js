const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const address = document.getElementById("address");
const contact = document.getElementById("contact");
const payment = document.getElementById("payment");
const userTypes = document.getElementsByName("userTypes");
const school = document.getElementById("school");
const university = document.getElementById("university");
const employee = document.getElementById("employee");
const form = document.getElementById("registration");

const alphaLetters = /^[A-Za-z]+$/;
const numbers = /^[0-9]+$/;
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (e) => {
  if (fname.value === "" || fname.value === null) {
    e.preventDefault();
    fnameError.innerText = "Required";
    console.log("requiirreeddd");
  } else if (!fname.value.match(alphaLetters)) {
    e.preventDefault();
    fnameError.innerText = "Only allowed alphabetical letters";
    console.log("requiirreeddd");
  }

  if (lname.value === "" || lname.value === null) {
    e.preventDefault();
    lnameError.innerText = "Required";
    console.log("requiirreeddd");
  } else if (!lname.value.match(alphaLetters)) {
    e.preventDefault();
    lnameError.innerText = "Only allowed alphabetical characters";
    console.log("requiirreeddd");
  }

  if (email.value === "" || email.value === null) {
    e.preventDefault();
    emailError.innerText = "Required";
    console.log("requiirreeddd");
  } else if (!email.value.match(emailFormat)) {
    e.preventDefault();
    emailError.innerText = "Invalid email address";
    console.log("requiirreeddd");
  }

  if (contact.value === "" || contact.value === null) {
    e.preventDefault();
    contactError.innerText = "Required";
    console.log("requiirreeddd");
  } else if (!contact.value.match(numbers)) {
    e.preventDefault();
    contactError.innerText = "Only allowed numerical characters";
    console.log("requiirreeddd");
  }

  if (address.value === "" || address.value === null) {
    e.preventDefault();
    addressError.innerText = "Required";
    console.log("requiirreeddd");
  }

  var x = 0;

  for (let i = 0; i < userTypes.length; i++) {
    if (userTypes[i].checked) {
      x++;
    }
  }

  if (x != 1) {
    e.preventDefault();
    userTypeError.innerText = "Select one option";
    console.log("requiirreeddd");
  } else {
    userTypeError.innerText = "";
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
