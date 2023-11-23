//start menu search input hover//
let search = document.querySelector("div.search");
let remover = document.querySelector(".remover");
let stickyitems = document.querySelector("div.sticky-menubar-items");
let inputsearch = document.querySelector("input.searchinput");

search.addEventListener("click", function () {
  inputsearch.classList.add("searchinputOpen");
  stickyitems.classList.add("sticky-menubar-items-Close");
  search.classList.add("searchOpen");
  remover.classList.add("removerOpen");
});
remover.addEventListener("click", function () {
  inputsearch.classList.remove("searchinputOpen");
  stickyitems.classList.remove("sticky-menubar-items-Close");
  search.classList.remove("searchOpen");
  remover.classList.remove("removerOpen");
});
//end menu search input hover//

// start submenu hover//

let menuObjects = document.querySelector("menu-objects");
let submenuMore = document.querySelector(".submenuMore");
let submenuWarcraft = document.querySelector(".submenuWarcraft");
let submenuCallofDuty = document.querySelector(".submenuCallofDuty");
let submenuDiablo = document.querySelector(".submenuDiablo");
let submenuoverwatch = document.querySelector(".submenuoverwatch");
let submenuStarCraft = document.querySelector(".submenuStarCraft");
let More = document.querySelector(".more-object");
let StarCraft = document.querySelector(".starcraft-object");
let Overwatch = document.querySelector(".overwatch-object");
let Diablo = document.querySelector(".diablo-object");
let CallOfDuty = document.querySelector(".callofduty-object");
let Warcarft = document.querySelector(".warcarft-object");
let NavSticky = document.querySelector(".sticky-menubar");
let MenuClose = document.querySelector(".menuClose");
let MenuBar = document.querySelector(".menubar");

More.addEventListener("mouseenter", function () {
  submenuMore.classList.add("submenuMoreOpen");
  submenuMore.classList.add("MenuhoverAnimation");
  More.classList.add("menuobjectshover");
});
More.addEventListener("mouseleave", function () {
  submenuMore.classList.remove("submenuMoreOpen");
  More.classList.remove("menuobjectshover");
});
CallOfDuty.addEventListener("mouseenter", function () {
  submenuCallofDuty.classList.add("submenuCallofDutyOpen");
  submenuCallofDuty.classList.add("MenuhoverAnimation");
  CallOfDuty.classList.add("menuobjectshover");
});
CallOfDuty.addEventListener("mouseleave", function () {
  submenuCallofDuty.classList.remove("submenuCallofDutyOpen");
  CallOfDuty.classList.remove("menuobjectshover");
});
Warcarft.addEventListener("mouseenter", function () {
  submenuWarcraft.classList.add("submenuWarcraftOpen");
  submenuWarcraft.classList.add("MenuhoverAnimation");
  Warcarft.classList.add("menuobjectshover");
});
Warcarft.addEventListener("mouseleave", function () {
  submenuWarcraft.classList.remove("submenuWarcraftOpen");
  Warcarft.classList.remove("menuobjectshover");
});
StarCraft.addEventListener("mouseenter", function () {
  submenuStarCraft.classList.add("submenuStarCraftOpen");
  submenuStarCraft.classList.add("MenuhoverAnimation");
  StarCraft.classList.add("menuobjectshover");
});
StarCraft.addEventListener("mouseleave", function () {
  submenuStarCraft.classList.remove("submenuStarCraftOpen");
  StarCraft.classList.remove("menuobjectshover");
});
Diablo.addEventListener("mouseenter", function () {
  submenuDiablo.classList.add("submenuDiabloOpen");
  submenuDiablo.classList.add("MenuhoverAnimation");
  Diablo.classList.add("menuobjectshover");
});
Diablo.addEventListener("mouseleave", function () {
  submenuDiablo.classList.remove("submenuDiabloOpen");
  Diablo.classList.remove("menuobjectshover");
});
Overwatch.addEventListener("mouseenter", function () {
  submenuoverwatch.classList.add("submenuoverwatchOpen");
  submenuoverwatch.classList.add("MenuhoverAnimation");
  Overwatch.classList.add("menuobjectshover");
});
Overwatch.addEventListener("mouseleave", function () {
  submenuoverwatch.classList.remove("submenuoverwatchOpen");
  Overwatch.classList.remove("menuobjectshover");
});
MenuBar.addEventListener("click", function () {
  NavSticky.classList.add("sticky-menubarOpen");
});
MenuClose.addEventListener("click", function () {
  NavSticky.classList.remove("sticky-menubarOpen");
  submenuWarcraft.classList.remove("submenuWarcraftOpen2");
  submenuCallofDuty.classList.remove("submenuCallofDutyOpen2");
  submenuDiablo.classList.remove("submenuDiabloOpen2");
  submenuoverwatch.classList.remove("submenuoverwatchOpen2");
  submenuStarCraft.classList.remove("submenuStarCraftOpen2");
  submenuMore.classList.remove("submenuMoreOpen2");
});
Warcarft.addEventListener("click", function () {
  submenuWarcraft.classList.add("submenuWarcraftOpen2");
  submenuCallofDuty.classList.remove("submenuCallofDutyOpen2");
  submenuDiablo.classList.remove("submenuDiabloOpen2");
  submenuoverwatch.classList.remove("submenuoverwatchOpen2");
  submenuStarCraft.classList.remove("submenuStarCraftOpen2");
  submenuMore.classList.remove("submenuMoreOpen2");
});
CallOfDuty.addEventListener("click", function () {
  submenuWarcraft.classList.remove("submenuWarcraftOpen2");
  submenuCallofDuty.classList.add("submenuCallofDutyOpen2");
  submenuDiablo.classList.remove("submenuDiabloOpen2");
  submenuoverwatch.classList.remove("submenuoverwatchOpen2");
  submenuStarCraft.classList.remove("submenuStarCraftOpen2");
  submenuMore.classList.remove("submenuMoreOpen2");
});
Diablo.addEventListener("click", function () {
  submenuWarcraft.classList.remove("submenuWarcraftOpen2");
  submenuCallofDuty.classList.remove("submenuCallofDutyOpen2");
  submenuDiablo.classList.add("submenuDiabloOpen2");
  submenuoverwatch.classList.remove("submenuoverwatchOpen2");
  submenuStarCraft.classList.remove("submenuStarCraftOpen2");
  submenuMore.classList.remove("submenuMoreOpen2");
});
Overwatch.addEventListener("click", function () {
  submenuWarcraft.classList.remove("submenuWarcraftOpen2");
  submenuCallofDuty.classList.remove("submenuCallofDutyOpen2");
  submenuDiablo.classList.remove("submenuDiabloOpen2");
  submenuoverwatch.classList.add("submenuoverwatchOpen2");
  submenuStarCraft.classList.remove("submenuStarCraftOpen2");
  submenuMore.classList.remove("submenuMoreOpen2");
});
StarCraft.addEventListener("click", function () {
  submenuWarcraft.classList.remove("submenuWarcraftOpen2");
  submenuCallofDuty.classList.remove("submenuCallofDutyOpen2");
  submenuDiablo.classList.remove("submenuDiabloOpen2");
  submenuoverwatch.classList.remove("submenuoverwatchOpen2");
  submenuStarCraft.classList.add("submenuStarCraftOpen2");
  submenuMore.classList.remove("submenuMoreOpen2");
});
More.addEventListener("click", function () {
  submenuWarcraft.classList.remove("submenuWarcraftOpen2");
  submenuCallofDuty.classList.remove("submenuCallofDutyOpen2");
  submenuDiablo.classList.remove("submenuDiabloOpen2");
  submenuoverwatch.classList.remove("submenuoverwatchOpen2");
  submenuStarCraft.classList.remove("submenuStarCraftOpen2");
  submenuMore.classList.add("submenuMoreOpen2");
});
// end submenu hover//
// start account submenu
// end account submenu
// Start API
const product = async () => {
  let data = await fetch("https://pooryia-safipour.github.io/json/db.json");
  let res = await data.json();
  let all = res.products;
  let sections = all
    .map(function (category) {
      let products = category.product;
      let items = products
        .map(function (product) {
          let yellowContent = "";
          if (
            Array.isArray(product.yellowContent) &&
            product.yellowContent.length > 0 &&
            typeof product.yellowContent[0].contyellow !== "undefined"
          ) {
            yellowContent = product.yellowContent[0].contyellow;
          }

          return `
        <div class="card">
        <div class="img-box">
        <img src="${product.image}" alt="" />
        </div>
        <div class="content-box">
        <small class="name">${product.name}</small>
        <h3 class="title">${product.title}</h3>
        <small class="yellow-content">
        ${yellowContent ? yellowContent : ""}
        </small>
        <small class="item-content">${product.content}</small>
        </div>
        </div>`;
        })
        .join("");
      return `<section class="groups">
        <h2>${category.title}</h2>
        <div class="items">
        ${items}
        </div>
        </section>`;
    })
    .join("");

  document.querySelector(".group-container").innerHTML = sections;
};
product();
// End Api
