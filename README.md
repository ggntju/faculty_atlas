# Faculty Atlas on GitHub Pages

A standalone promotional website for [Faculty Atlas](https://www.faculty-atlas.com/). All website source and assets live in this folder. It uses plain HTML, CSS, and JavaScript, with no installation, build step, database, API keys, or backend required.

## Preview locally

From the repository root:

```sh
python3 -m http.server 8080 --bind 127.0.0.1 --directory github
```

Open http://127.0.0.1:8080. Alternatively, serve the repository root; all site assets use relative paths so GitHub Pages project subpaths work.

## Content and assets

- Product facts and outbound destinations were checked against https://www.faculty-atlas.com/ on October 8, 2026. Coverage numbers are a dated snapshot, not live statistics; update the counts and date together when refreshing the page.
- Images are bundled from Faculty Atlas, as authorized for this page: `https://cdn.faculty-atlas.com/assets/research-library.png`, `academic-publishing.png`, `research-software.png`, and `faculty-workshop.png`. The CDN serves AVIF content for these URLs, so the local files use `.avif` extensions. `social-preview.jpg` is a JPEG conversion of the library image for social sharing compatibility.
- The logo comes from this repository’s `public/logo.svg` and matches the live site.
- Plus Jakarta Sans is self-hosted. Its SIL Open Font License is included in `assets/OFL.txt`.
- Brand images retain their existing rights; this folder does not grant a separate license to redistribute them.

The page supports mobile navigation, keyboard-accessible FAQ disclosures and audience selectors, a saved light/dark theme preference, reduced motion, and a skip link. Without JavaScript, navigation, product links, FAQ disclosures, and every audience description remain usable. There are no trackers or account forms; product actions lead to the official Faculty Atlas platform.

## Files

- `index.html`: content, metadata, and product links
- `styles.css`: responsive design and theme tokens
- `theme.js`: saved theme initialization before rendering
- `script.js`: theme control, audience selection, mobile menu behavior
- `assets/`: local illustrations, logo, font, and font license
- `.nojekyll`: tells GitHub Pages to serve this static site directly
