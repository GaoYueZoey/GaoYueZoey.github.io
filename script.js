// Keep the copyright current without requiring a build step.
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal the career path once, when it enters the viewport. Content stays
// visible when JavaScript is unavailable or the visitor prefers less motion.
const career = document.querySelector('[data-reveal]');
if (career && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  career.classList.add('reveal-ready');
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      career.classList.add('is-visible');
      observer.unobserve(career);
    }
  }, { threshold: 0.15 });
  observer.observe(career);
}
