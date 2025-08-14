// Function that shows and hides the drop-down menu of the "settings" sidebar section
const openMenu = document.getElementById("open-menu");
const settingsLink = document.getElementById("settings__button");
const sidebarConfig = document.querySelector(".switch");

// Toggle switch al hacer clic en settings
settingsLink.addEventListener("click", e => {
  if (openMenu.checked) { 
    sidebarConfig.style.display = "none";
    return;
  }
  
  const isVisible = sidebarConfig.style.display === "flex";
  sidebarConfig.style.display = isVisible ? "none" : "flex";
  settingsLink.classList.toggle("active");
});

// hide when the bar is closed with the menu open
openMenu.addEventListener("change", () => {
  if (openMenu.checked) {
    sidebarConfig.style.display = "none";
    settingsLink.classList.remove("active");
  }
});
