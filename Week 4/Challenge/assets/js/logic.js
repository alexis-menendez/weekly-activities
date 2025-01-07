// Toggle light/dark mode function
function toggleMode() {
  const body = document.body;
  const currentMode = body.classList.contains('dark') ? 'dark' : 'light';
  const newMode = currentMode === 'dark' ? 'light' : 'dark';

  // Toggle light/dark mode class
  body.classList.remove(currentMode);
  body.classList.add(newMode);  

  // Save the new mode to local storage
  localStorage.setItem('theme', newMode);

  // Update the circle color (CSS custom property)
  const root = document.documentElement;
  root.style.setProperty('--circle-color', newMode === 'dark' ? '#ffb100' : '#f9f9fb');
}

// Read the current theme from local storage and apply it
function applyStoredTheme() {
  const storedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(storedTheme);

  // Update the circle color
  const root = document.documentElement;
  root.style.setProperty('--circle-color', storedTheme === 'dark' ? '#ffb100' : '#f9f9fb');
}

// Read from local storage
function readLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

// Store data in local storage
function storeLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Save updated array back to local storage
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

// Event listener to toggle button
const toggleButton = document.getElementById('toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', toggleMode);
}

// Apply the theme when the page loads
document.addEventListener('DOMContentLoaded', applyStoredTheme);

// Redirect function
let redirectURL = '';
const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
