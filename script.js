const scrollButton = document.getElementById('scrollTop');

const toggleScrollButton = () => {
  if (window.scrollY > 400) {
    scrollButton.style.opacity = '1';
    scrollButton.style.pointerEvents = 'auto';
  } else {
    scrollButton.style.opacity = '0';
    scrollButton.style.pointerEvents = 'none';
  }
};

window.addEventListener('scroll', toggleScrollButton);
scrollButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

toggleScrollButton();
