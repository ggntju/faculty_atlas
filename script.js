document.documentElement.classList.add('js-enabled');

const themeToggle = document.querySelector('.theme-toggle');

function updateThemeLabel() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  const label = `Switch to ${isDark ? 'light' : 'dark'} theme`;
  themeToggle.setAttribute('aria-label', label);
  themeToggle.setAttribute('title', label);
}

updateThemeLabel();
themeToggle.addEventListener('click', () => {
  const theme =
    document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('faculty-atlas-pages-theme', theme);
  } catch {
    // Switching themes does not depend on persistent storage.
  }
  updateThemeLabel();
});

const menu = document.querySelector('.mobile-menu');
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.open = false;
  });
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.open) {
    menu.open = false;
    menu.querySelector('summary').focus();
  }
});
document.addEventListener('click', (event) => {
  if (menu.open && !menu.contains(event.target)) menu.open = false;
});

const audienceImage = document.getElementById('audience-image');
const audienceCaption = document.getElementById('audience-caption');
const audienceOptions = document.querySelectorAll('.audience-option');
audienceOptions.forEach((option) => {
  option.addEventListener('click', () => {
    audienceOptions.forEach((item) => {
      const selected = item === option;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-expanded', String(selected));
    });
    audienceImage.src = `assets/${option.dataset.image}`;
    audienceImage.alt = option.dataset.alt;
    audienceCaption.textContent = option.dataset.caption;
  });
});

document.getElementById('year').textContent = String(new Date().getFullYear());
