document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');

  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.classList.toggle('active', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));

  document.getElementById('year').textContent = new Date().getFullYear();

  // Reveal only content blocks; keep the page readable if JS is unavailable.
  const targets = document.querySelectorAll('.project-card, .about-copy, .visual-feature, .visual-note-card, .tool-grid > div');
  if ('IntersectionObserver' in window) {
    targets.forEach(el => el.classList.add('will-reveal'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(el => observer.observe(el));
  }
});
