const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const header = document.head;
const title = document.querySelector(".title-image");
const imageWrapper = document.querySelector(".image-wrapper");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
  header.classList.toggle("blur");
  title.classList.toggle("blur");
});

imageWrapper.addEventListener("click", () => {
  document.getElementById("events").scrollIntoView({ behavior: "smooth" });
});
