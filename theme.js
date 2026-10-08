// Run before the page renders to avoid a flash when a saved theme is applied.
try {
  const savedTheme = localStorage.getItem('faculty-atlas-pages-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    document.documentElement.dataset.theme = savedTheme;
  }
} catch {
  // The page still works when browser storage is unavailable.
}
