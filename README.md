# Ahmed Egeh — Portfolio

Single-page software engineer portfolio. React, TypeScript, and Vite. Light slate and cyan UI, JSON-driven copy.

Live content: profile, experience, core skills, education, and languages. Personal Projects and the intro video are in the repo but hidden until they are ready.

## Run locally

Needs [Node.js](https://nodejs.org/) 20+.

```bash
npm install
npm run dev
```

Dev server: `http://localhost:5173/` (or the next free port Vite prints).

```bash
npm run build    # production build
npm run preview  # serve the build
npm run lint     # oxlint
```

## Edit content

Almost all copy lives in [`src/data/portfolio.json`](src/data/portfolio.json). Components render that data. They do not hardcode the bio, jobs, or skill lists.

| Field | What it controls |
| --- | --- |
| `meta.title` / `meta.description` | Browser tab, search snippet, Open Graph / Twitter cards |
| `meta.siteUrl` | Canonical URL and absolute social-preview images. Set this after deploy (example: `https://your-domain.com/`) |
| `meta.ogImage` | Link-preview thumbnail (`/page-screenshot.png`) |
| `profile` | Name, title, summary, photo, email, phone, location, GitHub, LinkedIn, resume |
| `profile.intro` | Intro clip. Keep `"hidden": true` to hide Play introduction |
| `profile.cv` | Resume file in `public/`, button label, download filename |
| `experience` | Jobs. Optional `url` makes the company name a link |
| `skillGroups` | Core Skills chips |
| `education` | School. Optional `url` makes the school name a link |
| `languages` | Spoken languages |
| `projects` | Personal Projects cards (section is not rendered yet) |

### Assets

Put files in `public/` and point JSON at the public path:

- Photo: `public/myPhoto2.jpeg` → `profile.avatar` `/myPhoto2.jpeg` and `profile.avatarAlt`
- Link preview: `public/page-screenshot.png` → `meta.ogImage` `/page-screenshot.png`
- Resume: `public/Ahmed_Egeh_resume.pdf` → `profile.cv`
- Intro (optional): `public/media/intro.mp4` → `profile.intro.src`. Set `profile.intro.hidden` to `false` to show the button

### Bring hidden sections back

- **Play introduction:** set `profile.intro.hidden` to `false`
- **Personal Projects:** render `<Projects>` again in `src/App.tsx` and add the nav item `{ id: 'projects', label: portfolio.sections.projects }`

## Layout

- Desktop: profile stays on the left (~42%). Experience, skills, education, and languages scroll on the right
- Below 1000px: one column, profile on top
- Sticky section nav: Profile, Experience, Core Skills, Education, Languages

## SEO

`src/seo.ts` writes title, description, Open Graph, Twitter tags, and Person JSON-LD from the JSON. `index.html` has the same title/description for crawlers that skip JavaScript. `public/robots.txt` allows indexing.

After the site has a public URL, set `meta.siteUrl` so canonical and preview images are absolute.
