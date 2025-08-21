

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinkEls = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (
    navLinks.classList.contains('open') &&
    !navLinks.contains(e.target) &&
    !hamburger.contains(e.target)
    
  ) {
    navLinks.classList.remove('open');
  }
});

// Smooth scroll and active link highlight
navLinkEls.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Remove 'active' from all
    navLinkEls.forEach(l => l.classList.remove('active'));
    // Add to current
    this.classList.add('active');

    const sectionId = this.getAttribute('href').replace('#', '');
    const section = document.getElementById(sectionId);
    const headerOffset = document.querySelector('header').offsetHeight;
    const sectionPos = section.getBoundingClientRect().top + window.pageYOffset - headerOffset + 1;

    window.scrollTo({
      top: sectionPos,
      behavior: 'smooth',
    });

    navLinks.classList.remove('open');
  });
});