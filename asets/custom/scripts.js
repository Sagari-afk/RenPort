function main() {
  let signed = false;

  // NAV CHANGES
  const profile = document.querySelector(".profile");
  const sign = document.querySelectorAll(".sign");

  if (signed) {
    profile.style.display = "block";
    sign.forEach((el) => (el.style.display = "none"));
    console.log("You are signed");
  } else {
    profile.style.display = "none";
    sign.forEach((el) => (el.style.display = "block"));
    console.log("You are not signed");
  }

  // FIND BUTTON
  const btn_find = document.querySelector(".find-button");
  const btn_see_rentals = document.querySelector(".button-see-rent");
  if (btn_find) {
    btn_find.addEventListener("click", findVehicle);
  }
  if (btn_see_rentals) {
    btn_see_rentals.addEventListener("click", seeRentals);
  }

  // RENT VEHICLE SUBMIT
  let btn_rentSubmit = document.getElementById("rent-vehicle-submit-btn");
  submitEventListener(
    btn_rentSubmit,
    "name-your-contact",
    "surname-your-contact",
    "email-your-contact",
    "phone-your-contact"
  );

  // PROFILE CHANGES
  const editProfileBtn = document.querySelector(".edit-profile");
  const submitProfileBtn = document.querySelector(".submit-profile");
  if (editProfileBtn) {
    editProfileBtn.addEventListener("click", editProfile);
  }
  if (submitProfileBtn) {
    submitProfileBtn.addEventListener("click", submitProfile);
    submitEventListener(
      submitProfileBtn,
      "name-your-contact",
      "surname-your-contact",
      "email-your-contact",
      "phone-your-contact"
    );
  }

  // SIGN IN SIGN UP
  signToProfile(document.getElementById("sign-in-btn"));
  signToProfile(document.getElementById("sign-up-btn"));

  // RADIO BUTTONS
  if (document.querySelector(".choose")) {
    radioButtonsChengeChecked("vehicle-type", ".radio-b", ".radio-b-label");
  }
  if (document.querySelector(".rentals")) {
    radioButtonsChengeChecked("vehicle", ".rentals", ".rental");
  }
}

function submitEventListener(btn, n, s, e, p) {
  if (btn) {
    btn.addEventListener("click", (element) => {
      element.preventDefault();
      let name = document.getElementById(n).value;
      let surname = document.getElementById(s).value;
      let email = document.getElementById(e).value;
      let phone = document.getElementById(p).value;
      console.log(name, surname, email, phone);
      // send these data to db
    });
  }
}

const contactInfo = document.querySelector(".contact-info");
const contactInfoForm = document.querySelector(".contact-info-form");
function editProfile() {
  console.log("Edit profile btn was pressed");
  contactInfo.style.display = "none";
  contactInfoForm.style.display = "flex";
}

function submitProfile() {
  console.log("Submit profile btn was pressed");
  contactInfoForm.style.display = "none";
  contactInfo.style.display = "flex";
}

function findVehicle() {
  try {
    console.log("Find button was pressed");
    // need to send variant od vehicle, location and dates
    // to back or just save, send leter
    window.open("/rent_vehicle.html");
  } catch (err) {
    console.log(err);
  }
}

function submitRentVehicle() {
  if (document.getElementById("rent-vehicle-form")) {
    let name = document.getElementById(n).value;
    let surname = document.getElementById(s).value;
    let email = document.getElementById(e).value;
    let phone = document.getElementById(p).value;
  }
}

function seeRentals() {
  console.log("See rentals button was pressed");
  window.open("/rentals.html");
}

function signToProfile(btn) {
  if (btn) {
    btn.addEventListener("click", (element) => {
      element.preventDefault();
      // save data to db
      window.open("/profile.html");
      signed = true;
    });
  }
}

function radioButtonsChengeChecked(name, div, label) {
  let ele = document.getElementsByName(name);
  let radioButtons = document.querySelector(div);
  let labels = document.querySelectorAll(label);
  let temp = 0;
  if (name == "vehicle") {
    // because in another aplication in rent_vehicle index must be +1
    temp = 1;
  }

  radioButtons.addEventListener("change", function () {
    for (i = 0; i < ele.length; i++) {
      if (labels[i + temp].classList.contains("active")) {
        labels[i + temp].classList.remove("active");
      }
      if (ele[i].checked) {
        labels[i + temp].classList.add("active");
        console.log("You have chosed ", labels[i + temp].textContent);
        // Save this and then send to db in anothe funk
      }
    }
  });
}
