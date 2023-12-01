function main() {
  const btns = document.querySelectorAll(".find-button");
  btns.forEach((btn) => {
    btn.addEventListener("click", findVehicle);
  });
}

function findVehicle() {
  console.log("Stacili ste find btn meow");
  // need to send variant od vehicle, location and dates
  // to back or just save, send leter
  window.open("./rent_vehicle.html");
}
