const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");
    toggleBtn.textContent = body.classList.contains("light") ? "☀️" : "🌙";
});
