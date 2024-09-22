const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
});

const sItems = document.querySelectorAll(".s-item");

sItems.forEach((sItem) => {
  sItem.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidebar.classList.toggle("active");
    document
      .getElementById(`trc${sItem.id}`)
      .scrollIntoView({ behavior: "smooth" });
  });
});
