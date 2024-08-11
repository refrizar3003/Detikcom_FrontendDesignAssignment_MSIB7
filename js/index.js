const navMenuMobile = document.getElementById("nav-menu-mobile");
const nav = document.getElementById("nav");
const openCloseNavIcon = document.getElementById("open-close-nav-icon");
const openCategory = document.querySelector(".open-category-btn");

let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};
// event prev click
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};
// auto run slider
// let refreshinterval = setInterval(() => {
//   next.click();
// }, 3000);
function showSlider() {
  // remove item active old
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("active");
  thumbnailActiveOld.classList.remove("active");

  // active new item
  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");
}

//click thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});

function openCloseNav() {
  if (nav.className.split(" ")[nav.className.split(" ").length - 1] === "nav") {
    navMenuMobile.classList.add("show-nav-menu-mobile");
    nav.classList.remove("nav");
    nav.classList.add("nav-mobile");
    openCloseNavIcon.src = "static/new/tutup.svg";
  } else {
    navMenuMobile.classList.remove("show-nav-menu-mobile");
    nav.classList.remove("nav-mobile");
    nav.classList.add("nav");
    openCloseNavIcon.src = "static/new/menu.svg";
  }
}
