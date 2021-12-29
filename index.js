const sidebarButton = document.querySelector(".sidebar-button");
const sidebar = document.querySelector(".sidebar");

sidebarButton.addEventListener("click", () => {
  if (sidebar.classList.contains("sidebar-visible")) {
    sidebarButton.classList.remove("sidebar-button-active");
    sidebar.classList.remove("sidebar-visible");
  } else {
    sidebarButton.classList.add("sidebar-button-active");
    sidebar.classList.add("sidebar-visible");
  }
});