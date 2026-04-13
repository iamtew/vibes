# OBS HTML Assets

This folder contains a small collection of HTML pages intended for use as OBS browser sources, background visuals, countdown screens, and local previews.

## Files Included

### [`index.html`](index.html)
- A browser-side concierge that previews this README and helps verify the collection without squinting.

### [`clouds.html`](clouds.html)
- Pixelated vapor blobs drift across an 8-bit sky, giving you weather effects without the meteorologist.
- Arguments: `?speed=0-10`, `?info=1`

### [`empty.html`](empty.html)
- The perfectly blank OBS source. Use it for testing, layering, or when you want empty space to feel intentional.

### [`matrix.html`](matrix.html)
- Chromatic code rain with a soft glow, ideal for whenever your stream needs to feel just a little more ominous.
- Arguments: `?speed=`, `?color=` (hex values like `#64ff64`)

### [`lines.html`](lines.html)
- Full-screen terminal neon particles streaking across the screen, all motion and ambient glow.
- No URL arguments supported yet.

### [`pixel.html`](pixel.html)
- Pixel-art “Starting Soon” board with an animated grid and just enough retro swagger.

### [`spacetravel2.html`](spacetravel2.html)
- Full-screen starfield zoom through space with glowing moving stars.
- Arguments: `?speed=` (recommended range `0.1` to `1.2`)

### [`isogrid.html`](isogrid.html)
- An isometric ripple grid that feels like Douglas Adams designed geometry after tea.
- Arguments: `?color=#rrggbb` or `?color=rrggbb`, `?tileSize=` (16-256)

### [`retro.html`](retro.html)
- Retro terminal console with typing animation, perfect for hacker mood lighting and nostalgic UI energy.
- Arguments: `?color=`, `?speed=`

### [`spacetravel.html`](spacetravel.html)
- A drifting starfield for people who want to feel like they’re flying through space from the comfort of their desk.
- Arguments: `?colorSpeed=`, `?pixelated=`, `?dirt=`

### [`startingsoon.html`](startingsoon.html)
- Countdown timer page made for dramatic pauses, suspense, and theatrical “almost ready” vibes.
- Arguments: `?seconds=`, `?title=`

## Usage

1. Open any file directly in a browser to preview the effect.
2. In OBS, add a new Browser Source and point it to the local HTML file path.
3. Set the source resolution to your target canvas size (for example, `1920x1080`).
4. Append query parameters to customize speed, colors, title text, and other visual options.
5. All rights are reserved for these files; use is at your own risk and there is no warranty from the author.

## Notes

- Most files are self-contained with inline CSS and JavaScript.
- `pixel.html` loads an external pixel font from Google Fonts.
- `empty.html` is intentionally blank and can be reused as a starter page.
- `index.html` is an HTML preview of `README.md` and is not generally used as an OBS source.

