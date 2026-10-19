// Reveal only after a visitor activates the button to deter basic HTML scrapers.
const revealButton = document.getElementById('reveal-email');
const emailContainer = document.getElementById('email-address');

revealButton.hidden = false;
revealButton.addEventListener('click', () => {
  const address = ['axelelunab', ['gmail', 'com'].join('.')].join('@');
  const link = document.createElement('a');
  link.className = 'text-link email-link';
  link.href = `mailto:${address}`;
  link.textContent = address;
  emailContainer.replaceChildren(link);
  revealButton.hidden = true;
  link.focus();
}, { once: true });
