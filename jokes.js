// Browser version of Project_2.ipynb, using the same random joke API.
(() => {
  const fetchButton = document.getElementById('joke-fetch');
  const revealButton = document.getElementById('joke-reveal');
  const setup = document.getElementById('joke-setup');
  const punchline = document.getElementById('joke-punchline');
  const status = document.getElementById('joke-status');
  const hint = revealButton.querySelector('.joke-hint');
  fetchButton.hidden = false;

  fetchButton.addEventListener('click', async () => {
    fetchButton.disabled = true;
    fetchButton.textContent = 'Fetching…';
    revealButton.hidden = true;
    revealButton.setAttribute('aria-expanded', 'false');
    punchline.hidden = true;
    punchline.textContent = '';
    status.textContent = 'Finding a joke…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke', {
        signal: controller.signal
      });
      if (!response.ok) throw new Error('Request failed');
      const joke = await response.json();
      if (typeof joke.setup !== 'string' || typeof joke.punchline !== 'string' ||
          !joke.setup.trim() || !joke.punchline.trim()) {
        throw new Error('Invalid joke');
      }
      setup.textContent = joke.setup;
      punchline.textContent = joke.punchline;
      hint.textContent = 'Click to reveal the punchline →';
      revealButton.hidden = false;
      status.textContent = 'Joke ready. Select the joke below to reveal its punchline.';
    } catch (error) {
      status.textContent = 'Couldn’t load a joke. Please try again.';
    } finally {
      clearTimeout(timeout);
      fetchButton.disabled = false;
      fetchButton.textContent = 'Fetch another joke';
    }
  });

  revealButton.addEventListener('click', () => {
    const expanded = revealButton.getAttribute('aria-expanded') === 'true';
    revealButton.setAttribute('aria-expanded', String(!expanded));
    punchline.hidden = expanded;
    hint.textContent = expanded ? 'Click to reveal the punchline →' : 'Click to hide the punchline ↑';
  });
})();
