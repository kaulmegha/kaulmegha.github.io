# AI Agent: Build Log

This project was built end-to-end using [Kiro](https://kiro.dev) (Claude Sonnet 4.6) in a single chat session. No code was written manually.

## Background

**Megha Kaul** is an Azure & PSPO certified Product Manager with 9 years of experience leading data platforms, analytics, and AI-driven products in enterprise SaaS environments. She is currently a Product Manager at GEP Worldwide, where she owns the product vision and roadmap for internal and customer-facing data platforms contributing to $3.7M+ in annual revenue.

This repository hosts her personal portfolio website, built to showcase her professional experience, skills, education, and contact information to prospective employers and collaborators.

## Repository

- **Repo:** [kaulmegha/kaulmegha.github.io](https://github.com/kaulmegha/kaulmegha.github.io)
- **Live site:** https://kaulmegha.github.io/
- **Stack:** Angular 21, standalone components, Bootstrap, AOS animations
- **CI/CD:** GitHub Actions → `gh-pages` branch → GitHub Pages
- **Contact form:** Formspree (delivers to megha.aa12@gmail.com)

## What the agent did

1. **Explored** an existing reference Angular site (`website-v2`) to extract the design, component structure, CSS/JS assets, and deployment patterns
2. **Extracted** resume content directly from Megha's PDF using `pdftotext`: work history, education, skills, and summary history, education, skills, and summary
3. **Scaffolded** a complete Angular 21 app from scratch: hero/intro, about, skills, experience, education, contact, header, footer
4. **Migrated** from Angular 13 NgModules to Angular 21 standalone components
5. **Set up CI/CD** via GitHub Actions, building with Node 22 and deploying to the `gh-pages` branch
6. **Debugged deployment**: fixed wrong output path (`dist/megha-kaul/browser`), missing `base href`, and repo rename from `megha-kaul` to `kaulmegha.github.io`
7. **Wired the contact form** to Formspree for real email delivery
8. **Configured git** to push using Megha's dedicated SSH key (`bw_mk_github`)
9. **Fixed TypeScript 6** strict mode errors and deprecation warnings
10. **Added Docker support** for local development
