# Megha Kaul — Personal Website

Live at: https://kaulmegha.github.io/

## Run locally

**With Node:**
```bash
npm install --legacy-peer-deps
npm start
```
Open http://localhost:4200

**With Docker** (requires Docker Hub access):
```bash
docker-compose up --build
```
Open http://localhost:8080

## AI Agent

This project was built end-to-end using [Kiro](https://kiro.dev) (Claude Sonnet 4.6) in a single chat session. No code was written manually.

### What the agent did

- Scaffolded an Angular 21 personal portfolio site modeled after an existing reference site (`website-v2`)
- Extracted resume content (work history, education, skills, summary) directly from Megha's PDF resume using `pdftotext`
- Built all components: hero/intro, about, skills, experience, education, contact, header, footer
- Migrated the architecture from Angular 13 NgModules to Angular 21 standalone components
- Set up GitHub Actions CI/CD pipeline deploying to GitHub Pages (`gh-pages` branch)
- Diagnosed and fixed deployment issues: wrong output path (`dist/megha-kaul/browser`), missing `base href`, repo rename from `megha-kaul` to `kaulmegha.github.io`
- Wired the contact form to Formspree (`https://formspree.io/f/xkoawnqq`) for real email delivery
- Configured the repo to push using Megha's SSH key (`bw_mk_github`)
- Fixed TypeScript 6 strict mode errors and deprecation warnings across both projects
