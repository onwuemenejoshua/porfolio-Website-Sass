const menuBtn = document.querySelector(".menu-btn");
const openmenu = document.querySelector(".openMenu");
const closemenu = document.querySelector(".closeMenu");
const nav = document.querySelector(".nav");
// const menuNav = document.querySelector(".menu-nav");

openmenu.addEventListener("click", show);
closemenu.addEventListener("click", close);

function show() {
  nav.style.display = "flex";
  nav.style.right = "0";
  openmenu.style.display = "none";
  closemenu.style.display = "block";
}

function close() {
  nav.style.right = "-100%";
  openmenu.style.display = "block";
  closemenu.style.display = "none";
}
