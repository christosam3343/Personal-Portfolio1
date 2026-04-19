document.getElementById("year").textContent = new Date().getFullYear();

const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeToggleText = document.querySelector(".theme-toggle-text");

function updateThemeToggleLabel(theme) {
  themeToggleText.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
}

if (themeToggle && themeToggleText) {
  updateThemeToggleLabel(root.getAttribute("data-theme") || "dark");

  themeToggle.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    updateThemeToggleLabel(nextTheme);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

document.querySelectorAll(".reveal").forEach((section) => {
  observer.observe(section);
});
