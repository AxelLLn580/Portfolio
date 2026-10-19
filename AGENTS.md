# Repository guidance

## Project overview

This repository (`Portfolio`, remote `AxelLLn580/Portfolio`) is the working
repository for Axel Luna's personal portfolio website. The sibling repository
`AxelLLn580.github.io` is separate; do not put portfolio edits there unless the
user explicitly asks. Verify the repository root before editing files. Run all
portfolio commands with this repository as the working directory.

The site has five static HTML pages with no package manager, build step,
framework, or automated test suite.

## Files

- `index.html`, `about.html`, `projects.html`, `skills.html`, `contact.html`: pages.
- `styles.css`: shared responsive styles.
- `contact.js`: email reveal interaction.
- `assets/`: project placeholder illustrations.
- `Portfolio.code-workspace`: opens this repository as the sole workspace folder.
- `README.md`: repository introduction.

## Making changes

- Keep the site lightweight. Use plain HTML and CSS unless the task requires
  additional tooling or JavaScript.
- Follow the existing two-space HTML indentation and CSS conventions.
- Use semantic HTML, accessible markup, and responsive layouts. Preserve the
  viewport metadata and provide meaningful alternative text for new images.
- Keep personal details and page copy accurate; do not invent biographical
  information, projects, or contact details.
- Use relative paths for local assets so the site works on GitHub Pages.
- Keep edits scoped to the request and preserve unrelated user changes.

## Validation

- There are currently no build or test commands. Do not claim to have run them.
- For page changes, preview `index.html` in a browser when available and check
  narrow and wide layouts, readability, and any affected links or interactions.
- Check that referenced local assets exist and review the diff for unintended
  edits and whitespace errors with `git diff --check`.
- If browser validation is unavailable, state that limitation in the handoff.

## Delivery

Summarize what changed and how it was checked. Do not commit, push, or publish
changes unless the user requests it.
