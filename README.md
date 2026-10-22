# Axel Luna - Personal Portfolio

A static, five-page portfolio for GitHub Pages. No installation or build step is required.

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

Open `index.html` in a browser to preview. All pages share `styles.css`.
Project illustrations are in `assets/`.

## Design

- Colors: `--bg: #1C2430`, `--accent: #F59E0B`, `--text: #F8FAFC`.
- Fonts: Inter for headings and body text, loaded through Google Fonts with a system sans-serif fallback.
- Feel: clean, with lots of space, clear hierarchy, and restrained borders.
- Use dark surfaces, amber actions, and generous spacing across all five pages.
- Keep layouts responsive, keyboard focus visible, and text readable.
- Preserve accurate personal details, accessible markup, and relative asset paths as required by `AGENTS.md`.

## Personalize before sharing
The name Axel Luna and interest in chess come from the original website.
The coding and robotics background was supplied by Axel. Actual projects, skills,
proficiency levels, and professional profile links still need to be supplied. These areas are explicitly marked as
placeholders rather than presented as factual claims.

Replace all three project entries with real work, update their image paths and
alternative text, and add repository or demo links where available. Replace the
professional profile placeholders with the links you want to share.

The contact email is revealed on button activation by `contact.js`, with a readable
obfuscated fallback when JavaScript is disabled. This deters basic email harvesting;
it cannot prevent sophisticated scrapers or unwanted messages.

## Interactive elements

- On screens up to 600px wide, the Menu button expands and collapses the navigation. Escape closes it and returns focus to the button. Without JavaScript, navigation stays visible.
- The Light mode toggle switches all pages between the default dark palette and a light palette with darker amber for readable contrast. The choice is saved in browser storage when available.
- Both controls are shared through `site.js`; the contact page also retains its email reveal button.

## Validation
Check each page on desktop and mobile, keyboard navigation, and links after edits.
Run `git diff --check` to check tracked changes for whitespace errors.
