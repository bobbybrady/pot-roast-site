/*
 * Everything editable on the site lives in this file.
 */

export const site = {
  // `name` is the wordmark + footer lockup; `title` is the prose/document form.
  // Changing the brand name means changing these two lines and nothing else.
  name: 'POT ROAST CO.',
  title: 'Pot Roast Co.',
  tagline: 'Games, apps, and open-source software.',
  secondary: 'We make things we want to exist.',
  email: 'hello@potroast.co',
  github: 'https://github.com/Pot-Roast-Co',
  year: 2026,
};

/*
 * ASCII glyph system.
 *
 * Each project references a compact glyph by key. Preserve spacing and
 * line breaks, since glyphs are
 * rendered in a <pre>. They are decorative only (aria-hidden), so the project
 * still reads correctly without them.
 */
export const ascii = {
  flowerpot: String.raw`
  (o)
  \|/
   |
 [___]`,

  // Exact compact art supplied by the reviewer; preserve whitespace.
  gravy: [
    '   )',
    '  ( ',
    ' .----.',
    '(______)__',
    String.raw` \______/`,
  ].join('\n'),
};

/*
 * Shipped things. `labels` render as [ LIKE THIS ] — keep them short and
 * uppercase. `links` render in source order; the first is the primary.
 */
export const projects = [
  {
    name: 'VS Code Flowers',
    glyph: 'flowerpot',
    labels: ['OPEN SOURCE'],
    description: 'A calm little garden that grows inside VS Code.',
    links: [
      { label: 'GITHUB', href: 'https://github.com/bobbybrady/vs-code-flowers' },
    ],
  },
  {
    name: 'Gravy',
    glyph: 'gravy',
    labels: ['OPEN SOURCE'],
    description: 'A tool for running coding agents on your own projects.',
    links: [
      { label: 'GITHUB', href: 'https://github.com/bobbybrady/gravy' },
    ],
  },
];

/* Works in progress. Same shape as `projects`. */
export const cooking = [];
