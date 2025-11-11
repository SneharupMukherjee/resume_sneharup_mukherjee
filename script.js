const scrollButton = document.getElementById('scrollTop');
const connectBar = document.getElementById('connectBar');

const toggleScrollElements = () => {
  const scrolled = window.scrollY > 400;
  scrollButton.style.opacity = scrolled ? '1' : '0';
  scrollButton.style.pointerEvents = scrolled ? 'auto' : 'none';

  if (scrolled) {
    connectBar.classList.add('visible');
  } else {
    connectBar.classList.remove('visible');
  }
};

window.addEventListener('scroll', toggleScrollElements);
scrollButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

toggleScrollElements();
