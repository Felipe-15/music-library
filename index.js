const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", (event) => {
  menuButton.style.display = "none";
  document
    .querySelector(".profile-container")
    .classList.add("profile-absolute");
  document.querySelector("aside").classList.add("opened-menu");
  document.querySelector("nav").style.display = "inline";

  const menuHolder = document.querySelector(".menu-holder");
  menuHolder.classList.remove("closed-menu");
  menuHolder.classList.add("centered");

  document.querySelector(".close-menu-button").style.display = "inline";
});

// menuButton.addEventListener("click", (event) => {
//   menuButton.style.display = "none";
//   document.querySelector(".profile-container").style.display = "none";
//   document.querySelector("aside").classList.add("opened-menu");
//   document.querySelector("nav").style.display = "inline";

//   const menuHolder = document.querySelector(".menu-holder");
//   menuHolder.classList.remove("closed-menu");
//   menuHolder.classList.add("centered");

//   document.querySelector(".close-menu-button").style.display = "inline";
// });

const closeMenuButton = document.querySelector(".close-menu-button");
closeMenuButton.addEventListener("click", () => {
  closeMenuButton.style.display = "none";
  document.querySelector("aside").classList.remove("opened-menu");
  document.querySelector("nav").style.display = "none";
  document
    .querySelector(".profile-container")
    .classList.remove("profile-absolute");
  const menuHolder = document.querySelector(".menu-holder");
  menuHolder.classList.add("closed-menu");

  menuButton.style.display = "inline";
});
