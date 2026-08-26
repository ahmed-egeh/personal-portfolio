# Portfolio

Single-page software engineer portfolio (React + TypeScript + Vite).

## Edit content

Almost all copy lives in [`src/data/portfolio.json`](src/data/portfolio.json): profile, skill groups, experience, projects, page title, and meta description.

To use a personal photo, put the file in `public/` and set `profile.avatar` (for example `/me.jpg`) plus `profile.avatarAlt`. Set `profile.github` and `profile.linkedin` to your profile URLs. The left-pane intro clip is `profile.intro` (`public/media/intro.mp4`).

## Scripts

```bash
npm run dev
npm run build
npm run lint
```
