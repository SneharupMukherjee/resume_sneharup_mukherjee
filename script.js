const scrollButton = document.getElementById('scrollTop');
const connectBar = document.getElementById('connectBar');
const visibilityBuffer = 200;

const toggleScrollElements = () => {
  const doc = document.documentElement;
  const scrolled = window.scrollY > 400;
  const nearBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - visibilityBuffer;

  if (scrollButton) {
    scrollButton.style.opacity = scrolled ? '1' : '0';
    scrollButton.style.pointerEvents = scrolled ? 'auto' : 'none';
  }

  if (connectBar) {
    if (scrolled && !nearBottom) {
      connectBar.classList.add('visible');
    } else {
      connectBar.classList.remove('visible');
    }
  }
};

window.addEventListener('scroll', toggleScrollElements);
if (scrollButton) {
  scrollButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

toggleScrollElements();
