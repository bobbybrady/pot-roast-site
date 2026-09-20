# pot-roast-site

The Pot Roast Co. home page. Astro + plain CSS, static output, no JavaScript ships
to the browser.

## Run it

```
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Editing content

Everything lives in `src/data/site.js`:

- `site` — name, tagline, email, GitHub, year
- `projects` — shipped things ("Stuff we made")
- `cooking` — works in progress ("Currently cooking:")
- `ascii` — the tiny glyph for each project

**Adding a project:** add an object to `projects` or `cooking`, and add its
glyph to `ascii` under a matching `glyph` key. Nothing else needs touching.

```js
{
  name: 'Thing',
  glyph: 'thing',            // key in `ascii`
  labels: ['GAME', 'SHIPPED'],   // render as [ GAME ] [ SHIPPED ]
  platform: 'iPhone',        // optional, cooking entries use it
  description: 'One sentence.',
  links: [{ label: 'PLAY', href: 'https://...' }],
}
```

**Glyphs** are ASCII illustrations displayed beside the project details on
desktop and above them on mobile. Gravy uses the exact compact gravy boat supplied in review. Glyphs preserve spacing and line breaks inside `<pre>` and are
`aria-hidden` — decorative only. Project names use the first link; any additional
links appear below the description.

The main pot lives in `src/components/AsciiPot.astro`. Its walls sit at columns
3 and 14; keep them there or the lid and base will drift.

## Themes

The palette follows the visitor's OS by default and can be pinned with the
`[ LIGHTS OUT ]` / `[ LIGHTS ON ]` toggle in the footer, which persists to
`localStorage` under `pr-theme`.

All four colours live in `src/styles/global.css`. The `light-dark()` values
are guarded by `@supports`; browsers without support use plain colors with OS
and pinned-theme overrides. To change a colour, update its `light-dark()`
values and the corresponding plain fallback values.

The toggle works by setting `data-theme="light" | "dark"` on `<html>`, which
sets `color-scheme` and flips every `light-dark()` value at once. Two inline
scripts in `src/layouts/Base.astro` drive it: one in `<head>` re-pins the saved
theme before first paint (no flash), one at the end of `<body>` wires the
button. The button ships with `hidden` and is only revealed by that script, so
it is never a dead control when JS is off.

`<meta name="theme-color">` follows the OS only, not the pinned choice — it just
tints mobile browser chrome.

## Deploying

Static output, so any host works. Build command `npm run build`, output
directory `dist`. For GitHub Pages on a project repo, set `site` and `base` in
`astro.config.mjs` first.

## Placeholders still to replace

- Before merging, confirm Gravy's details with Bobby: GitHub URL
  `https://github.com/bobbybrady/gravy`, description “A tool for running coding
  agents on your own projects.”, and labels `OPEN SOURCE` / `SHIPPED`.
