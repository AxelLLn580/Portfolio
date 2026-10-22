const root = document.documentElement;
const header = document.querySelector('.site-header');
const navigation = document.getElementById('main-navigation');
const menuButton = document.querySelector('.menu-toggle');
const themeButton = document.querySelector('.theme-toggle');
const mobile = window.matchMedia('(max-width: 600px)');

function setMenu(open) {
  navigation.hidden = mobile.matches && !open;
  menuButton.setAttribute('aria-expanded', String(mobile.matches && open));
}

menuButton.hidden = false;
menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});
header.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobile.matches && !navigation.hidden) {
    setMenu(false);
    menuButton.focus();
  }
});
document.addEventListener('click', (event) => {
  if (mobile.matches && !header.contains(event.target)) setMenu(false);
});
navigation.addEventListener('click', (event) => {
  if (mobile.matches && event.target.closest('a')) setMenu(false);
});
mobile.addEventListener('change', () => {
  const focusWasInNavigation = navigation.contains(document.activeElement);
  const focusWasOnMenu = document.activeElement === menuButton;
  setMenu(false);
  if (mobile.matches && focusWasInNavigation) menuButton.focus();
  if (!mobile.matches && focusWasOnMenu) navigation.querySelector('a').focus();
});
setMenu(false);


// Keep native Tab navigation and add optional shortcuts within the navigation.
menuButton.addEventListener('keydown', (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (mobile.matches && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
    event.preventDefault();
    setMenu(true);
    const links = navigation.querySelectorAll('a[href]');
    links[event.key === 'ArrowUp' ? links.length - 1 : 0].focus();
  }
});
navigation.addEventListener('keydown', (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  const links = Array.from(navigation.querySelectorAll('a[href]'));
  const index = links.indexOf(document.activeElement);
  if (index < 0) return;
  let next;
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      next = (index + 1) % links.length;
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      next = (index - 1 + links.length) % links.length;
      break;
    case 'Home':
      next = 0;
      break;
    case 'End':
      next = links.length - 1;
      break;
    default:
      return;
  }
  event.preventDefault();
  links[next].focus();
});

const main = document.getElementById('main');
document.querySelector('.skip-link').addEventListener('click', () => {
  setMenu(false);
  main.focus();
});

function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton.textContent = theme === 'light' ? 'Dark mode' : 'Light mode';
  themeButton.setAttribute('aria-pressed', String(theme === 'light'));
  document.querySelector('meta[name="theme-color"]').content =
    theme === 'light' ? '#F8FAFC' : '#1C2430';
}

let savedTheme;
try {
  savedTheme = localStorage.getItem('portfolio-theme');
} catch {
  // The toggle still works when browser storage is unavailable.
}
setTheme(savedTheme === 'light' ? 'light' : 'dark');
themeButton.hidden = false;
themeButton.addEventListener('click', () => {
  const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  setTheme(theme);
  try {
    localStorage.setItem('portfolio-theme', theme);
  } catch {
    // Keep the selected theme for this page even without persistent storage.
  }
});
