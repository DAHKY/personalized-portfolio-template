// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

let isDarkMode = false;

toggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#ffffff';
    toggleButton.style.backgroundColor = '#ffffff';
    toggleButton.style.color = '#000000';
  } else {
    document.body.style.backgroundColor = '#f4f4f4';
    document.body.style.color = '#000000';
    toggleButton.style.backgroundColor = '#000000';
    toggleButton.style.color = '#ffffff';
  }
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Example Console Message
console.log('Portfolio Template by DAHKY is loaded and ready!');
