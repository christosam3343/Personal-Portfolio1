document.getElementById("year").textContent = new Date().getFullYear();

const root = document.documentElement;
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const themeToggleText = document.querySelector(".theme-toggle-text");
const navLinks = [...document.querySelectorAll("[data-nav-target]")];
const sections = [...document.querySelectorAll("main .section[id]")];
const copyEmailLink = document.querySelector("[data-copy-email]");
const copyToast = document.getElementById("copy-toast");
let copyToastTimer;

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

document.querySelectorAll(".reveal").forEach((section, index) => {
  section.style.setProperty("--reveal-delay", `${index * 70}ms`);
});

function setActiveNavSection(sectionId) {
  body.setAttribute("data-active-section", sectionId);

  const navSectionMap = {
    education: "experience",
    skills: "projects",
  };
  const activeNavTarget = navSectionMap[sectionId] || sectionId;

  navLinks.forEach((link) => {
    const isActive = link.dataset.navTarget === activeNavTarget;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

setActiveNavSection("about");

const navObserver = new IntersectionObserver(
  (entries) => {
    const visibleEntries = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visibleEntries.length > 0) {
      setActiveNavSection(visibleEntries[0].target.id);
    }
  },
  {
    threshold: [0.2, 0.45, 0.7],
    rootMargin: "-18% 0px -42% 0px",
  }
);

sections.forEach((section) => {
  navObserver.observe(section);
});

function showCopyToast(message) {
  if (!copyToast) {
    return;
  }

  copyToast.textContent = message;
  copyToast.classList.add("is-visible");
  window.clearTimeout(copyToastTimer);
  copyToastTimer = window.setTimeout(() => {
    copyToast.classList.remove("is-visible");
  }, 1800);
}

if (copyEmailLink) {
  copyEmailLink.addEventListener("click", async (event) => {
    event.preventDefault();

    const email = copyEmailLink.dataset.copyEmail;

    try {
      await navigator.clipboard.writeText(email);
      showCopyToast("Email copied to clipboard");
    } catch (error) {
      showCopyToast("Could not copy email");
    }
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
