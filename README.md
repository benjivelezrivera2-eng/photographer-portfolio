# Photographer Portfolio (dark theme)

Static, desktop-first, responsive portfolio site. Plain HTML, CSS and JS, no build step.
Recreated from a Figma Community photographer template layout, with original placeholder content.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All page sections and content |
| `styles.css` | Design tokens (`:root`), layout, responsive breakpoints (1024px, 720px) |
| `main.js` | Mobile menu, slider arrows, active nav link, footer year |

## Run it

Open `index.html` in a browser, or serve the folder: `npx serve .`

## Replace the placeholder content

- **Name / text:** search `index.html` for `Alex Morgan`, `ALEX`, `hello@yourdomain.com`, `+00 000 000 0000`.
- **Photos:** every image slot is a `<div class="ph ...">` with a gradient placeholder. To use a real photo, add `style="--img:url('images/photo.jpg')"` to that element and put the file in an `images/` folder.
- **Colors / fonts:** edit the variables at the top of `styles.css`. Font is Manrope via Google Fonts.
- **Sections:** Hero, About, Services (slider), Portfolio (slider), FAQ, Testimonials (slider), Footer.

## Notes

- The layout is based on a Figma Community template by Produce UI. Check that template's license before commercial use.
- Placeholder reviews, client names and stats are fake. Replace them before publishing.
