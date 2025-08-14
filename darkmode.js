// ========= DARK MODE ==========
const darkToggle = document.getElementById("toggle__darkmode");

// ===settings colors===

// dark colors
const darkStyles = {

  // general backgrounds colors
  "--bg-color": "#181818",
  "--sidebar-color": "#212121",
  "--background-hover-color": "#212121",

  // icons colors
  "--dark-color": "#181818",
  "--dark-color-transparent": "#181818",
  "--color-icon": "#ececec",
  "--color-icono-tarjetas": "#181818",
  "--color-icono-tarjetas-2": "#ececec",

  // cards colors
  "--card-bg-color": "#0080ff33",
  "--card-bg-color-2": "#6262627f",
  "--background-front-card": "#383838",

  // outline colors
  "--secundary-color": "#1dcaea",

  // text colors
  "--text-color": "#ececec",
  "--sidebar-text-color": "#ececec",
  "--text-color-hover": "#ececec",

  // box shadow
  "--box-shadow": "0 0 10px rgba(255, 255, 255, 0.1)",
};

// LIGHT COLORS
const lightStyles = {

  // general coolors
  "--bg-color": "color-mix(in srgb, #0080ff 70%, #010101)",
  "--sidebar-color": "#f9f9f9",
  "--background-hover-color": "#f9f9f9",

  // icons colors
  "--dark-color": "#0080ff",
  "--dark-color-transparent": "transparent",
  "--color-icon": "color-mix(in srgb, #0080ff 70%, #010101)",
  "--color-icono-tarjetas": "var(--dark-color)",
  "--color-icono-tarjetas-2": "var(--dark-color)",

  // cards colors
  "--card-bg-color": "#0080ff17",
  "--card-bg-color-2": "#0080ff17",
  "--background-front-card": "var(--sidebar-color)",

  // outline colors
  "--secundary-color": "#1dcaea",

  // text colors
  "--text-color": "#212121",
  "--sidebar-text-color": "#ececec",
  "--text-color-hover": "color-mix(in srgb, #0080ff 70%, #010101)",

  // box shadow
  "--box-shadow": "0 0 15px rgba(0, 0, 0, 0.1)",
};

// === settings img ===

// dark img
const darkImages = [
  "astronauta-oscuro.png",
  "tecnologia-oscuro.png",
  "natural-oscuro.png",
  "arte-oscuro.png",
  "geo-oscuro.png"
];

// light img
const lightImages = [
  "astronauta-claro.png",
  "tecnologia-claro.png",
  "natural-claro.png",
  "arte-claro.png",
  "geo-claro.png"
];


function applyTheme(isDark) {
  const styles = isDark ? darkStyles : lightStyles;
  const images = isDark ? darkImages : lightImages;

  // Aply styles
  for (const [prop, value] of Object.entries(styles)) {
    document.body.style.setProperty(prop, value);
  }

  // change img
  images.forEach((src, index) => {
    const el = document.querySelector(`.img__space${index + 1}`);
    if (el) el.style.backgroundImage = `url('img/${src}')`;
  });

  // save to localStorage
  localStorage.setItem("darkMode", isDark ? "true" : "false");
}

// event change toggle
if (darkToggle) { 
darkToggle.addEventListener("change", () => {
  applyTheme(darkToggle.checked);
});
}
// restore theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("darkMode") === "true";
  applyTheme(savedTheme);

  if (darkToggle) {
    darkToggle.checked = savedTheme;
  }
});

