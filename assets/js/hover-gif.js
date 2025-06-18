document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.hover-gif').forEach(img => {
    const animated = img.dataset.animated;
    const staticSrc = img.dataset.static;

    img.addEventListener('mouseenter', () => {
      img.src = animated + "?v=" + Date.now();
    });

    img.addEventListener('mouseleave', () => {
      img.src = staticSrc;
    });
  });
});
