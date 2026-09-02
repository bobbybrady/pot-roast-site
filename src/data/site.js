/*
 * Everything editable on the site lives in this file.
 *
 * TODO before going live — placeholders marked `#` or noted below:
 *   - site.email            (currently a placeholder address)
 *   - Wishbone Party links  (play + repo)
 *   - Little Patch link
 *   - Yoga Magic link
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

  wishbone: String.raw`
 o     o
  \   /
   \_/
    |`,

  patch: String.raw`
  , . ,
  \|\|/
   |||
 ~~~~~~~`,

  book: String.raw`
  __ __
 /  |  \
|  ~|~  |
 \__|__/`,
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
    name: 'Wishbone Party',
    glyph: 'wishbone',
    labels: ['GAME', 'SHIPPED'],
    description: 'A tiny chaotic browser game about breaking wishbones at a party.',
    links: [
      { label: 'PLAY', href: '#' },
      { label: 'GITHUB', href: '#' },
    ],
  },
];

/* Works in progress. Same shape as `projects`. */
export const cooking = [
  {
    name: 'Little Patch',
    glyph: 'patch',
    labels: ['APP', 'BUILDING'],
    platform: 'iPhone',
    description: 'A tiny real-time garden that grows throughout the day.',
    links: [],
  },
  {
    name: 'Yoga Magic with Ms. Clare',
    glyph: 'book',
    labels: ['APP', 'BUILDING'],
    platform: 'iPhone / iPad',
    description: 'Animated watercolor storybooks that guide kids through yoga.',
    links: [],
  },
];
