const galleryItems = document.querySelectorAll(".gallery-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Délai progressif selon la position dans la grille
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, entry.target.dataset.delay);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

// On assigne un délai à chaque item
galleryItems.forEach((item, i) => {
  item.dataset.delay = (i % 4) * 100; // décalage par colonne
  observer.observe(item);
});
