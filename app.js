let catBtn = document.getElementsByClassName("dropCat");

let isOpen = false;

const popOpen = () => {
  let popUp = document.getElementById("popCatDiv");
  if (!isOpen) {
    popUp.style.display = "flex";
  } else if (isOpen) {
    popUp.style.display = "none";
  }
  isOpen = !isOpen;
};
