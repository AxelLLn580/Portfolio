// Browser adaptation of the two-player rules in Project_3.ipynb.
(() => {
  const choices = document.getElementById('rps-choices');
  const status = document.getElementById('rps-status');
  const next = document.getElementById('rps-next');
  const reset = document.getElementById('rps-reset');
  const buttons = [...choices.querySelectorAll('button')];
  const beats = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
  let player1 = null;
  let phase = 'player1';
  choices.hidden = false;

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const choice = button.dataset.choice;
      if (!Object.hasOwn(beats, choice)) return;
      if (phase === 'player1') {
        player1 = choice;
        phase = 'handoff';
        choices.hidden = true;
        next.hidden = false;
        status.textContent = 'Player 1’s choice is locked. Pass the screen to Player 2.';
        next.focus();
      } else if (phase === 'player2') {
        const result = player1 === choice ? "It's a tie!" :
          beats[player1] === choice ? 'Player 1 wins!' : 'Player 2 wins!';
        status.textContent = `Player 1: ${player1}. Player 2: ${choice}. ${result}`;
        phase = 'complete';
        choices.hidden = true;
        reset.hidden = false;
        reset.focus();
      }
    });
  }

  next.addEventListener('click', () => {
    if (phase !== 'handoff') return;
    phase = 'player2';
    next.hidden = true;
    choices.hidden = false;
    choices.setAttribute('aria-label', 'Player 2 choice');
    status.textContent = 'Player 2: choose rock, paper, or scissors.';
    buttons[0].focus();
  });

  reset.addEventListener('click', () => {
    player1 = null;
    phase = 'player1';
    reset.hidden = true;
    next.hidden = true;
    choices.hidden = false;
    choices.setAttribute('aria-label', 'Player 1 choice');
    status.textContent = 'Player 1: choose rock, paper, or scissors.';
    buttons[0].focus();
  });
})();
