# Gender Reveal invitation

**Live site: https://jmocon.github.io/gender-reveal/**

The web version of the invitation for Jeenel & Jumarie's gender reveal: Saturday, December 12, 2026, 5:00 PM at Provenciano, Capiz Room.

It's a static site with no build step, served by GitHub Pages from the `main` branch.

| File | What it is |
| --- | --- |
| `index.html` | The invitation |
| `style.css` | The look and the animations: pink and blue on cream, Cormorant Garamond + Great Vibes |
| `script.js` | The "N days to go" countdown |
| `invite.ics` | The calendar file for the "Add to calendar" button (5:00–8:00 PM, Manila time) |
| `favicon.svg` | The heart icon in the browser tab |

## Updating the site

Commit and push to `main`; GitHub Pages republishes within a minute or two.

```powershell
git add .
git commit -m "Update invitation"
git push
```

Pages settings: https://github.com/jmocon/gender-reveal/settings/pages

## Editing details

Event details appear in `index.html` and `invite.ics`. The countdown date is in `script.js`. Change all three if the date or time moves.
