// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// SOUND TOGGLE
const video = document.getElementById("bgVideo");
const soundBtn = document.getElementById("soundToggle");

if (video && soundBtn) {
  soundBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    soundBtn.textContent = video.muted ? "🔊 Enable Sound" : "🔇 Mute Sound";
  });
}

// GAME MODES
const modeButtons = document.querySelectorAll(".mode-btn");
modeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modeButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.body.className = btn.classList.contains("discipline")
      ? "discipline"
      : btn.classList.contains("legacy")
      ? "legacy"
      : "aggression";
  });
});

/* ACTIVE MENU ON SCROLL */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-list a");

function updateActiveMenu() {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveMenu);
updateActiveMenu();

/* VIDEO PARALLAX */
const videoBg = document.querySelector(".video-bg");
window.addEventListener("scroll", () => {
  const offset = window.scrollY * 0.25;
  videoBg.style.transform = `translateY(${offset}px)`;
});

/* SECTION ACTIVATION */
const allSections = document.querySelectorAll(".section");
function activateSections() {
  allSections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight * 0.75) {
      section.classList.add("section-active");
    }
  });
}
window.addEventListener("scroll", activateSections);
activateSections();

/* STATS COUNTER */
const statValues = document.querySelectorAll(".stat-value");
let statsAnimated = false;
function animateStats() {
  if (statsAnimated) return;
  const statsSection = document.getElementById("stats");
  if (statsSection.getBoundingClientRect().top < window.innerHeight * 0.75) {
    statsAnimated = true;
    statValues.forEach(stat => {
      const finalValue = stat.textContent.replace(/\D/g, "");
      const suffix = stat.textContent.replace(/[0-9]/g, "");
      let current = 0;
      const increment = Math.ceil(finalValue / 60);
      const counter = setInterval(() => {
        current += increment;
        if (current >= finalValue) {
          stat.textContent = finalValue + suffix;
          clearInterval(counter);
        } else {
          stat.textContent = current + suffix;
        }
      }, 20);
    });
  }
}
window.addEventListener("scroll", animateStats);

/* TIMELINE YEAR */
const timelineYears = document.querySelectorAll(".timeline-year");
function activateTimelineYear() {
  timelineYears.forEach(year => {
    if (year.getBoundingClientRect().top < window.innerHeight * 0.6) {
      timelineYears.forEach(y => y.classList.remove("active"));
      year.classList.add("active");
    }
  });
}
window.addEventListener("scroll", activateTimelineYear);
activateTimelineYear();
