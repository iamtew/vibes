### How the Settings Menu Works (Blueprint for Reuse)

The settings menu is a small UI panel that appears in the corner of the screen and lets the user change all runtime parameters of the vibe without editing the URL manually. It is built from four core ideas:

1. **URL‑Driven Configuration**  
   Every adjustable parameter (pattern, speed, zoom, color, etc.) is stored in the URL as a query argument.  
   On page load, the script reads these arguments and initializes the vibe accordingly.  
   When the user changes a setting in the menu, the script updates the URL using `history.replaceState()` so the state is always shareable and reload‑safe.

2. **Toggleable Menu With Three Visibility States**  
   The `?menu=` argument controls how the menu behaves:  
   - `ON` → menu open  
   - `OFF` → menu closed but toggle button visible  
   - `DISABLE` → both menu and toggle button hidden (locked‑down mode for OBS)  
   The toggle button switches between an “open” icon (⭕) and a “close” icon (❌).  
   The menu and button always occupy the same corner for consistency.

3. **Instant‑Apply Controls**  
   All UI elements (dropdowns, sliders, text inputs) update the vibe immediately when changed.  
   No reloads, no apply button.  
   Each control updates:  
   - the internal variable  
   - the URL parameter  
   - any dependent calculations (like grid size or color palette)

4. **Self‑Maintaining UI Elements**  
   Some controls populate themselves automatically from the code.  
   For example, the pattern dropdown scans the `getPhase()` function for all `case "..."` entries and builds the list dynamically.  
   This ensures the UI never breaks when new patterns or features are added.

Using these four rules, the menu becomes a reusable system:  
- Add a new parameter → add a UI control → sync it to a URL argument → instant‑apply it.  
- The menu always stays in sync with the vibe and with the URL.  
- The user can always share or bookmark the exact configuration.

## Additional menu behavior:
- menu should use sliders for number ranges
- menu should always have a reset button
- should always have two buttons to copy the URL. one as is, and one with `?menu=DISABLE` for easy copy/paste into OBS Browser Source. 
