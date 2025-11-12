// Efek scroll halus untuk navbar aktif
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 100;

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
