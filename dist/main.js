const menuBtn = document.querySelector(".menu-btn");
const openmenu = document.querySelector(".openMenu");
const closemenu = document.querySelector(".closeMenu");

openmenu.addEventListener("click", show);
closemenu.addEventListener("click", close);

function show() {
  //   mainMenu.style.display = "flex";
  //   mainMenu.style.right = "0";
  openmenu.style.display = "none";
  closemenu.style.display = "block";
}

function close() {
  //   mainMenu.style.right = "-100%";
  openmenu.style.display = "block";
  closemenu.style.display = "none";
}

// let showMenu = false;

// menuBtn.addEventListener("click", toggleMenu);

// function toggleMenu() {
//   if (!showMenu) {
//     hamburger.classList.add("open");

//     showMenu = true;
//   } else {
//     hamburger.classList.remove(open);

//     showMenu = false;
//   }
// }
