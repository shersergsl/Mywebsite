const colo_l = document.querySelector(".colo_l");
const centr_l = document.querySelector(".centr_l");
const leftblock_r = document.querySelector(".leftblock_r");
const leftblock_l = document.querySelector(".leftblock_l");
const colo_r = document.querySelector(".colo_r");
const centr_r = document.querySelector(".centr_r");
const rightblock_r = document.querySelector(".rightblock_r");
const rightblock_l = document.querySelector(".rightblock_l");
const boorger = document.querySelector(".boorger");
const headermenu_kvadro = document.querySelector(".headermenu_kvadro");

boorger.addEventListener("click", function (e) {
    headermenu_kvadro.parentElement.classList.toggle('_active');
});

colo_l.addEventListener("mouseenter", function (createStyle) {
  centr_l.style.backgroundColor = "rgb(0, 0, 0,0)";
  centr_l.style.width = "104px";
  centr_l.style.height = "62px";
  centr_l.style.backgroundImage =
    "radial-gradient(circle at 53px -20px, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 60px, rgb(5,55,105) 61px)";
  centr_l.style.color = "#FFF";
  leftblock_r.style.borderTopLeftRadius = "40px 25px";
  leftblock_l.style.borderTopRightRadius = "40px 25px";
});

colo_l.addEventListener("mouseleave", function (createStyle) {
  centr_l.style.backgroundColor = "rgb(5, 55,105)";
  centr_l.style.width = "104px";
  centr_l.style.height = "70px";
  centr_l.style.backgroundImage =
    "radial-gradient(circle at 53px -20px, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 60px, rgb(5,55,105) 61px)";
  centr_l.style.color = "#FFF";
  leftblock_r.style.borderTopLeftRadius = "0px";
  leftblock_l.style.borderTopRightRadius = "0";
});
colo_r.addEventListener("mouseenter", function (createStyle) {
  centr_r.style.backgroundColor = "rgb(0, 0, 0,0)";
  centr_r.style.width = "104px";
  centr_r.style.height = "62px";
  centr_r.style.backgroundImage =
    "radial-gradient(circle at 53px -20px, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 60px, rgb(5,55,105) 61px)";
  centr_r.style.color = "#FFF";
  rightblock_r.style.borderTopLeftRadius = "40px 25px";
  rightblock_l.style.borderTopRightRadius = "40px 25px";
});

colo_r.addEventListener("mouseleave", function (createStyle) {
  centr_r.style.backgroundColor = "rgb(5, 55,105)";
  centr_r.style.width = "104px";
  centr_r.style.height = "70px";
  centr_r.style.backgroundImage =
    "radial-gradient(circle at 53px -20px, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 60px, rgb(5,55,105) 61px)";
  centr_r.style.color = "#FFF";
  rightblock_r.style.borderTopLeftRadius = "0px";
  rightblock_l.style.borderTopRightRadius = "0";
});
