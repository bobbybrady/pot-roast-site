/*
 * Everything editable on the site lives in this file.
 *
 * TODO before going live:
 *   - site.email  (currently a placeholder address)
 */

export const site = {
  // `name` is the wordmark + footer lockup; `title` is the prose/document form.
  // Changing the brand name means changing these two lines and nothing else.
  name: 'POT ROAST CO.',
  title: 'Pot Roast Co.',
  tagline: 'Games, apps, and open-source software.',
  secondary: 'We make things we want to exist.',
  email: 'hello@potroast.com', // TODO: real address
  github: 'https://github.com/bobbybrady',
  year: 2026,
};

/*
 * ASCII glyph system.
 *
 * Each project references a glyph by key. Keep them small — 3 to 4 lines,
 * under ~10 columns — and align them in a monospace editor, since they are
 * rendered in a <pre>. They are decorative only (aria-hidden), so the project
 * still reads correctly without them.
 */
export const ascii = {
  flowerpot: String.raw`
  (o)
  \|/
   |
 [___]`,

  gravy: String.raw`
  ~  ~
 ,-----.
<       )
 '-----'`,
};

/*
 * Shipped things. `labels` render as [ LIKE THIS ] — keep them short and
 * uppercase. `links` render in source order; the first is the primary.
 */
export const projects = [
  {
    name: 'VS Code Flowers',
    glyph: 'flowerpot',
    labels: ['OPEN SOURCE', 'SHIPPED'],
    description: 'A calm little garden that grows inside VS Code.',
    links: [
      { label: 'GITHUB', href: 'https://github.com/bobbybrady/vs-code-flowers' },
    ],
  },
  {
    name: 'Gravy',
    glyph: 'gravy',
    labels: ['OPEN SOURCE', 'SHIPPED'],
    description: 'A tool for running coding agents on your own projects.',
    links: [
      { label: 'GITHUB', href: 'https://github.com/bobbybrady/gravy' },
    ],
  },
];

/* Works in progress. Same shape as `projects`. */
export const cooking = [];
