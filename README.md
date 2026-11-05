# Axel Luna - Personal Portfolio

Repository: [AxelLLn580/Portfolio](https://github.com/AxelLLn580/Portfolio)

Live website: [Axel Luna's portfolio](https://axellln580.github.io/Portfolio/)

A responsive, five-page personal portfolio introducing Axel Luna's background, education, interests, and growing technical skills. The Projects page presents an inventory management program and playable browser adaptations of a joke fetcher and a two-player rock-paper-scissors game. Built with plain HTML, CSS, and JavaScript for GitHub Pages; no installation or build step is required.

## Workspace

Open `Portfolio.code-workspace` in VS Code to work with this repository alone.
This repository is `AxelLLn580/Portfolio`; the sibling `AxelLLn580.github.io`
repository is separate. Start new coding sessions with this folder selected and
confirm the working directory ends in `Portfolio/Portfolio` before editing.

## Pages
- `index.html`: introduction and navigation.
- `about.html`: background, education, and interests.
- `projects.html`: three project entries.
- `skills.html`: technical skills and proficiency categories.
- `contact.html`: public contact information.

## View locally

Download the repository ZIP and extract it, or clone it:

```sh
git clone https://github.com/AxelLLn580/Portfolio.git
cd Portfolio
```

Open `index.html` in a current browser. Alternatively, open the folder in VS Code and use a local preview extension to serve `index.html`.

Internet access is needed for the joke API, Google Fonts, and linked Google Colab notebooks. The two-player game runs locally without a server.

All pages share `styles.css`.
Project illustrations are in `assets/`.

## Design

- Colors: `--bg: #1C2430`, `--accent: #F59E0B`, `--text: #F8FAFC`.
- Fonts: Inter for headings and body text, loaded through Google Fonts with a system sans-serif fallback.
- Feel: clean, with lots of space, clear hierarchy, and restrained borders.
- Use dark surfaces, amber actions, and generous spacing across all five pages.
- Keep layouts responsive, keyboard focus visible, and text readable.
- Preserve accurate personal details, accessible markup, and relative asset paths as required by `AGENTS.md`.

## Notes and acknowledgments

Personal details and Python projects were supplied by Axel Luna. Codex assisted with implementation, wording, illustrations, and checks. The browser demos adapt the Python programs to JavaScript; the original notebooks remain available through the project links, with local copies for projects two and three.

The joke fetcher uses the [Official Joke API](https://official-joke-api.appspot.com/random_joke). Fonts are provided by Google Fonts. The inventory dashboard is an illustration of the program's behavior.

The contact email is revealed on button activation by `contact.js`, with a readable
obfuscated fallback when JavaScript is disabled. This deters basic email harvesting;
it cannot prevent sophisticated scrapers or unwanted messages.

## Interactive elements

- On screens up to 600px wide, the Menu button expands and collapses the navigation. Escape closes it and returns focus to the button. Without JavaScript, navigation stays visible.
- The Light mode toggle switches all pages between the default dark palette and a light palette with darker amber for readable contrast. The choice is saved in browser storage when available.
- Both controls are shared through `site.js`; the contact page also retains its email reveal button.
- `jokes.js` fetches a joke and reveals its punchline when the joke text is selected. It includes loading and error states.
- `rock-paper-scissors.js` supports private choices for two players, reveals the result, and resets for another round.

## Keyboard navigation

- Use Tab / Shift+Tab to move between links and buttons. Focus is visibly outlined.
- Press Enter to follow links; Enter or Space activates buttons.
- The first Tab reveals Skip to content. Press Enter to move focus to the main content.
- In the mobile menu, Enter or Space opens the menu; Down / Up opens it and focuses the first / last link. Escape closes it and returns focus to Menu.
- Within navigation, arrow keys move between links; Home / End selects the first / last link. Tab can always move out of navigation.

## Validation
Check each page on desktop and mobile, keyboard navigation, and links after edits.
Run `git diff --check` to check tracked changes for whitespace errors.

See [AGENTS.md](AGENTS.md) for repository guidance, [TESTING.md](TESTING.md) for the test plan and historical execution record, and [REPORT.md](REPORT.md) for the project report. Historical test results are dated and do not represent a fresh audit of every later change.
