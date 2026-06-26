# OBS HTML Assets

This folder contains a small collection of HTML pages intended for use as OBS browser sources, background visuals, countdown screens, and local previews.

## Files Included

### [`index.html`](index.html)
- A browser-side concierge that previews this README and helps verify the collection without squinting.

### [`404.html`](404.html)
- A simple error-style page for browser sources that should return nothing or show a minimal fallback.

### [`clouds.html`](clouds.html)
- Pixelated vapor blobs drift across an 8-bit sky, giving you weather effects without the meteorologist.
- Arguments: `?speed=0-10`, `?info=1`

### [`coderain.html`](coderain.html)
- Chromatic code rain with Japanese characters and alphanumeric digits falling down the screen, creating an immersive digital atmosphere.
- Arguments: `?color=` (hex or named color), `?speed=`

### [`field.html`](field.html)
- A geometric field effect with animated lines and soft motion, good for subtle ambient backgrounds.

### [`flower-of-life.html`](flower-of-life.html)
- A full-screen Flower of Life sacred-geometry animation with slow rotation and glowing circle intersections.

### [`flower-of-cyber.html`](flower-of-cyber.html)
- A cyber-inspired Flower of Life canvas animation with glowing lines and color customization.
- Arguments: `?color=` (hex), `?seconds=` for timing behavior.

### [`sacred.html`](sacred.html)
- A sacred geometry demo with a radial gradient, 25px grid overlay, inset frame, and selectable canvas animations.
- Arguments: `?color=` (hex), `?anim=` (`flower`, `fruit`, `metatron`), `?speed=`

### [`isogrid.html`](isogrid.html)
- An isometric ripple grid that feels like Douglas Adams designed geometry after tea.
- Arguments: `?color=#rrggbb` or `?color=rrggbb`, `?tileSize=` (16-256)

### [`kladd.html`](kladd.html)
- An experimental sketch file with color-shifting patterns and interactive effects—a work in progress for visual experimentation.
- Arguments: `?color=` (hex)

### [`liner.html`](liner.html)
- Clean linear waveforms and animated stroke lines, useful for elegant animated overlays.

### [`gradient.html`](gradient.html)
- A pulsing radial gradient background that breathes light from the center outward.
- Arguments: `?color=` (hex or named color, e.g. `#00D9FF`)

### [`sinewaves.html`](sinewaves.html)
- Animated CRT-style sine wave field with scanlines and occasional glitch slices.
- Arguments: `?color=` (hex or named color)

### [`lines.html`](lines.html)
- Full-screen terminal neon particles streaking across the screen, all motion and ambient glow.
- No URL arguments supported yet.

### [`matrix.html`](matrix.html)
- Chromatic code rain with a soft glow, ideal for whenever your stream needs to feel just a little more ominous.
- Arguments: `?speed=`, `?color=` (hex values like `#64ff64`)

### [`pixel.html`](pixel.html)
- Pixel-art “Starting Soon” board with an animated grid and just enough retro swagger.

### [`pixel-fade-matrix.html`](pixel-fade-matrix.html)
- GPU‑friendly pixel‑block animation engine that generates evolving color‑wave patterns using mathematical phase fields rendered through an ImageData grid.
- Arguments: `?cellSize=`, `?pattern=`, `?speed=`, `?menu=`, `?color=`

### [`retro.html`](retro.html)
- Retro terminal console with typing animation, perfect for hacker mood lighting and nostalgic UI energy.
- Arguments: `?color=`, `?speed=`

### [`spacetravel.html`](spacetravel.html)
- A drifting starfield for people who want to feel like they’re flying through space from the comfort of their desk.
- Arguments: `?colorSpeed=`, `?pixelated=`, `?dirt=`

### [`spacetravel2.html`](spacetravel2.html)
- Full-screen starfield zoom through space with glowing moving stars.
- Arguments: `?speed=` (recommended range `0.1` to `1.2`)

### [`startingsoon.html`](startingsoon.html)
- Countdown timer page made for dramatic pauses, suspense, and theatrical “almost ready” vibes.
- Arguments: `?seconds=`, `?title=`
### [`voroni.html`](voroni.html)
- A Voronoi diagram pulse field with colorful animated polygons that respond to mouse clicks and create dynamic pulsing effects.
- Arguments: `?color=` (hex)
### [`empty.html`](empty.html)
- The perfectly blank OBS source. Use it for testing, layering, or when you want empty space to feel intentional.

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

