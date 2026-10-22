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
