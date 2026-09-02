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

**Glyphs** are 3–4 lines, under ~10 columns, aligned in a monospace editor.
They render inside `<pre>` and are `aria-hidden` — decorative only.

The main pot lives in `src/components/AsciiPot.astro`. Its walls sit at columns
3 and 14; keep them there or the lid and base will drift.

## Themes

The palette follows the visitor's OS by default and can be pinned with the
`[ LIGHTS OUT ]` / `[ LIGHTS ON ]` toggle in the footer, which persists to
`localStorage` under `pr-theme`.

All four colours are defined once in `src/styles/global.css` using
`light-dark(light, dark)`. Each is declared twice — a plain fallback first for
browsers without `light-dark()` (pre-2024), then the real one. To change a
colour, edit both values on the `light-dark()` line.

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

- `site.email` — currently `hello@potroast.com`
- Wishbone Party play + repo links (`#`)
