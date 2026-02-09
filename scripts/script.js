// Simple animation for skill bars on scroll
const skills = document.querySelectorAll(".progress div");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;
  skills.forEach(skill => {
    const top = skill.getBoundingClientRect().top;
    if (top < trigger) {
      skill.style.opacity = 1;
    }
  });
});
