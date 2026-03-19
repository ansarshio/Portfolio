const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

// Toggle sidebar
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Close when clicking any link
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});

// Close on right click anywhere
document.addEventListener("contextmenu", () => {
  sidebar.classList.remove("active");
});
