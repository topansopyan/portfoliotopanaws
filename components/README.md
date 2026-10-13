# Components

Reusable UI pieces for this portfolio are generated from JavaScript factory
functions so the markup stays in one place and the content stays data-driven.

## Where things live

| Concern            | File                 | Notes                                              |
|--------------------|----------------------|----------------------------------------------------|
| Component factories| `../js/components.js`| `SkillCard()`, `ProjectCard()`, `renderInto()`     |
| Content / data     | `../js/data.js`      | `SITE_DATA` — edit text, skills, and projects here |
| Component styles    | `../css/components.css` | `.glass`, `.btn`, `.badge`, `.skill-card`, etc. |

## Why no framework?

Per the project tech stack, the site is 100% client-side plain HTML/CSS/JS with
no build step, no backend, and no API calls. The "components" are therefore
lightweight DOM factories rather than framework components, but they follow the
same idea: one definition, reused everywhere, driven by data.

## Adding a new project card

Open `../js/data.js` and append to `SITE_DATA.projects`:

```js
{
  emoji: '✨',
  title: 'My New Project',
  desc: 'Short description.',
  tags: ['Tag1', 'Tag2'],
  demo: 'https://...',
  code: 'https://github.com/...'
}
```

It renders automatically on the Projects section — no HTML edits needed.

## Adding a new skill group

Append to `SITE_DATA.skills` using the same `{ icon, title, tags }` shape.
