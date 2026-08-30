const lightModeBtn = document.getElementById("lightModeBtn");
const darkModeBtn = document.getElementById("darkModeBtn");
const savedTheme = localStorage.getItem("theme") || "light";

function setTheme(theme) {
  document.body.classList.toggle("dark-theme", theme === "dark");
  localStorage.setItem("theme", theme);

  lightModeBtn.classList.toggle("active", theme === "light");
  darkModeBtn.classList.toggle("active", theme === "dark");
}

lightModeBtn.addEventListener("click", function () {
  setTheme("light");
});

darkModeBtn.addEventListener("click", function () {
  setTheme("dark");
});

setTheme(savedTheme);
