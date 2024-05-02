//
const menuIcon = document.querySelector(".mobile-menu");
const menuList = document.querySelector(".list-menu");
const hamburgerIcon = document.querySelector(".fa");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList.value === "fa fa-bars") {
    hamburgerIcon.className = "fa fa-xmark";
    menuList.style.display = "flex";
  } else {
    hamburgerIcon.className = "fa fa-bars";
    menuList.style.display = "none";
  }
});
