const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

// Toggle sidebar
menuBtn.onclick = () => {
  sidebar.classList.toggle("active");
};

// Close when click link
document.querySelectorAll(".sidebar a").forEach(link => {
  link.onclick = () => {
    sidebar.classList.remove("active");
  };
});

// Close on right click
document.addEventListener("contextmenu", () => {
  sidebar.classList.remove("active");
});
