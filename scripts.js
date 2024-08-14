const toggleThemeBtn = document.getElementById("toggleTheme");

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
