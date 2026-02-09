// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + window.innerHeight / 2;
  sections.forEach(section => {
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if(section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos){
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Fade-in sections on scroll
const faders = document.querySelectorAll('.fade-section');
const appearOptions = { threshold: 0.1 };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));
