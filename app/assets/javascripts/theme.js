// Theme toggle

document.addEventListener('DOMContentLoaded', function() {
  var stored = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', stored);
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.checked = stored === 'dark';
    toggle.addEventListener('change', function() {
      var theme = toggle.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }
});
