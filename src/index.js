// carousel.js
const track = document.getElementById("carousel-track");
const dotsContainer = document.getElementById("dots");
const total = 3; // nombre de slides
let current = 0;
let timer;

const dots = Array.from({ length: total }, (_, i) => {
  const d = document.createElement("button");
  d.className = "dot" + (i === 0 ? " active" : "");
  d.addEventListener("click", () => goTo(i));
  dotsContainer.appendChild(d);
  return d;
});

function goTo(n) {
  current = (n + total) % total;
  track.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle("active", i === current));
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => goTo(current + 1), 7000); // défilement auto toutes les 4s
}

resetTimer();

const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.projects": "Mes chantiers",
    "nav.contact": "Contact",
    "btn.discover": "Découvrir →",
    "btn.collection": "Voir la collection →",
    "btn.contact": "Nous contacter →",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "My projects",
    "nav.contact": "Contact",
    "btn.discover": "Discover →",
    "btn.collection": "View the collection →",
    "btn.contact": "Contact us →",
  },
};

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
