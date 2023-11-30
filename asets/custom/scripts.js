function main() {
  const btns = document.querySelectorAll(".find-button");
  btns.forEach((btn) => {
    btn.addEventListener("click", findVehicle());
  });
}

function findVehicle() {
  console.log("Stacili ste find btn meow");
}
