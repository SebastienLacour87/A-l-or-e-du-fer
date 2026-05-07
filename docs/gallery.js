const galleryItems = document.querySelectorAll(".gallery-item");

if (galleryItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Déclenche tous les items
          galleryItems.forEach((item) => {
            setTimeout(() => {
              item.classList.add("visible");
            }, item.dataset.delay);
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.1 },
  );

  galleryItems.forEach((item, i) => {
    item.dataset.delay = i * 150;
  });

  // Observer uniquement le premier item
  observer.observe(galleryItems[0]);
}
