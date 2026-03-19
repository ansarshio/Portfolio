const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

// Toggle menu
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.toggle("active");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && e.target !== menuBtn) {
    sidebar.classList.remove("active");
  }
});

// Close when clicking links
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});
