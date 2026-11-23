# Gender Reveal invitation

The web version of the invitation for Jeenel & Jumarie's gender reveal: Saturday, December 12, 2026, 5:00 PM at Provenciano, Capiz Room.

It's a static site with no build step, ready for GitHub Pages.

| File | What it is |
| --- | --- |
| `index.html` | The invitation |
| `style.css` | The look: neutral boho, Cormorant Garamond + Great Vibes |
| `script.js` | The "N days to go" countdown |
| `invite.ics` | The calendar file for the "Add to calendar" button (5:00–8:00 PM, Manila time) |
| `favicon.svg` | The balloon icon in the browser tab |

## Publish on GitHub Pages

1. Create a new **public** repository on GitHub, for example `gender-reveal`.
2. Push this folder to it:
   ```powershell
   git add .
   git commit -m "Add gender reveal invitation"
   git remote add origin https://github.com/<your-username>/gender-reveal.git
   git push -u origin main
   ```
3. On GitHub, open the repo's **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/gender-reveal/`.

## Editing details

Event details appear in `index.html` and `invite.ics`. The countdown date is in `script.js`. Change all three if the date or time moves.
