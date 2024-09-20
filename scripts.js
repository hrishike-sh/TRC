const hamburger = document.querySelector(".hamburger");
const body = document.body;
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  body.classList.toggle("blur");
});
