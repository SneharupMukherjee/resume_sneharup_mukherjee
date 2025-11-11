const connectBar = document.getElementById('connectBar');

const toggleScrollElements = () => {
  const scrolled = window.scrollY > 400;

  if (connectBar) {
    connectBar.classList.toggle('visible', scrolled);
  }
};

window.addEventListener('scroll', toggleScrollElements);

toggleScrollElements();
