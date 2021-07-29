//Spark Assignment
//Registration form for a library
//form validations

//get the elements for the specified IDs related to all input fields
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const address = document.getElementById("address");
const contact = document.getElementById("contact");
const payment = document.getElementById("payment");
const userType = document.getElementsByName("userTypes");
const form = document.getElementById("registration");

//used for input format validations
const alphaLetters = /^[A-Za-z]+$/;
const numbers = /^[0-9]+$/;
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//input validation function
//check if there are empty input fields
//check for correct input formats
//on invalid input form submission fails
form.addEventListener("submit", (e) => {
  //variable to check if all input fields are validated
  let success = true;

  //validating First Name input
  if (fname.value === "" || fname.value === null) {
    e.preventDefault();
    fnameError.innerText = "Required";
    success = false;
  } else if (!fname.value.match(alphaLetters)) {
    e.preventDefault();
    fnameError.innerText = "Only allowed alphabetical characters";
    success = false;
  }

  //validating Last Name input
  if (lname.value === "" || lname.value === null) {
    e.preventDefault();
    lnameError.innerText = "Required";
    success = false;
  } else if (!lname.value.match(alphaLetters)) {
    e.preventDefault();
    lnameError.innerText = "Only allowed alphabetical characters";
    success = false;
  }

  //validating Email Address input
  if (email.value === "" || email.value === null) {
    e.preventDefault();
    emailError.innerText = "Required";
    success = false;
  } else if (!email.value.match(emailFormat)) {
    e.preventDefault();
    emailError.innerText = "Invalid email address";
    success = false;
  }

  //validating Contact Number input
  if (contact.value === "" || contact.value === null) {
    e.preventDefault();
    contactError.innerText = "Required";
    success = false;
  } else if (!contact.value.match(numbers)) {
    e.preventDefault();
    contactError.innerText = "Only allowed numerical characters";
    success = false;
  }

  //validating Address input
  if (address.value === "" || address.value === null) {
    e.preventDefault();
    addressError.innerText = "Required";
    success = false;
  }

  //validating User Type radio button input
  //user is only allowed select one option
  var x = 0;

  for (let i = 0; i < userType.length; i++) {
    if (userType[i].checked) {
      x++;
    }
  }

  if (x != 1) {
    e.preventDefault();
    userTypeError.innerText = "Required (Select one option)";
    success = false;
  }

  //on validation success form submission will notify with a success alert message
  if (success) {
    alert("User Added Successfully");
  }
});

//function to hide error messages
function hideError() {
  document.getElementById(this.id + "Error").innerHTML = "";
}

//hide error messages on release key
fname.onkeyup = hideError;
lname.onkeyup = hideError;
email.onkeyup = hideError;
contact.onkeyup = hideError;
address.onkeyup = hideError;

//hide error messages on clicking a radio button
for (let i = 0; i < userType.length; i++) {
  userType[i].onclick = hideError;
}
