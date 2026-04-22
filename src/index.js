// Gestion de la nav
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.remove("-translate-y-full");
    header.classList.add("bg-white/90", "backdrop-blur-sm", "shadow-md");
  } else {
    header.classList.add("-translate-y-full");
    header.classList.remove("bg-white/90", "backdrop-blur-sm", "shadow-md");
  }
});

// Carousel
const track = document.getElementById("carousel-track");
const dotsContainer = document.getElementById("dots-button-slider");

if (track && dotsContainer) {
  const total = 3;
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
    timer = setInterval(() => goTo(current + 1), 7000);
  }

  resetTimer();
}

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxCaption = document.getElementById("lightbox-caption");

if (lightbox && lightboxImg && lightboxClose && lightboxCaption) {
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  document.querySelectorAll("figure[data-lightbox]").forEach((figure) => {
    figure.style.cursor = "pointer";
    const img = figure.querySelector("img");
    const caption = figure.querySelector("figcaption");
    figure.addEventListener("click", () => {
      openLightbox(img.src, img.alt, caption ? caption.textContent : "");
    });
  });

  document.querySelectorAll("img[data-lightbox]").forEach((img) => {
    img.classList.add("cursor-pointer");
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });

  document.querySelectorAll("div[data-lightbox]").forEach((div) => {
    div.addEventListener("click", () => openLightbox(div.dataset.lightbox, ""));
  });
}

function openLightbox(src, alt, caption = "") {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightboxCaption.textContent = caption;
  lightbox.classList.remove("hidden");
  lightbox.classList.add("flex");
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
  lightboxImg.src = "";
}

// Animation des menus galerie
const slideItems = document.querySelectorAll(".slide-in");

if (slideItems.length > 0) {
  const slideObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          slideItems.forEach((item) => {
            setTimeout(() => {
              item.classList.add("visible");
            }, item.dataset.delay);
          });
          slideObserver.disconnect();
        }
      });
    },
    { threshold: 0.1 },
  );

  slideObserver.observe(slideItems[0]);
}
