function main() {
  let signed = false;

  let profile = document.querySelector(".profile");
  let sign = document.querySelectorAll(".sign");

  if (signed) {
    profile.style.display = "block";
    sign.forEach((el) => (el.style.display = "none"));
    console.log("You are signed");
  } else {
    profile.style.display = "none";
    sign.forEach((el) => (el.style.display = "block"));
    console.log("You are not signed");
  }

  const btn_find = document.querySelector(".find-button");
  const btn_see_rentals = document.querySelector(".button-see-rent");
  if (btn_find) {
    btn_find.addEventListener("click", findVehicle);
  }
  if (btn_see_rentals) {
    btn_see_rentals.addEventListener("click", seeRentals);
  }
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

function seeRentals() {
  console.log("See rentals button was pressed");
  window.open("/rentals.html");
}
