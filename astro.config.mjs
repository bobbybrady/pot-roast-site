import { defineConfig } from 'astro/config';

// Static output — deploys as-is to Cloudflare Pages, Vercel, or GitHub Pages.
// For GitHub Pages on a project repo, set `site` and `base` here.
export default defineConfig({
  site: 'https://potroast.co',
  output: 'static',
});
