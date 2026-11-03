# Zago Mello: goalkeeper site (LOCAL DRAFT, not published)
Plain static HTML/CSS/JS with relative paths and no build step, so it works on GitHub Pages as-is (`.nojekyll` included).
Preview: `python3 -m http.server 8080` in this folder, then open http://localhost:8080/

- `index.html`: Hero (autoplay muted loop) · Save Reel (with chapter buttons) · Ball Control · Gallery (lightbox) · Bio & Stats · Soccer Cards · Coaching U6–U10 · Contact
- `library.html` + `data/videos.json`: Save Library, YouTube embeds only. Fill in `youtubeId` and the card switches from "Coming soon" to the player.
- `reel/`: hero reel, loop, poster, EDL.md, build-reel.sh
- `screenshots/`: preview only; you can leave this out of the repo.

GitHub Pages: keep each file under 50 MB (GitHub warns above 50 MB and blocks above 100 MB). Sites have a soft 1 GB limit, so put full-length videos on YouTube rather than in the repo.

## Placeholders to fill in
[AGE] [CLUB] [HEIGHT] [FOOT/HAND] [SHORT BIO] [ACHIEVEMENTS] [SEASON] (cards) · card stats [--]
[CONTACT EMAIL] (index.html and CONTACT_EMAIL in js/main.js)
Coaching: [PRICE] x3, [DURATION], [GROUP SIZE], [NUMBER] sessions, [LOCATION / FIELD], [DAYS & TIMES], [POLICY], [SUPERVISION / SAFETY NOTE]
Ball control: [PERSONAL BEST]
GitHub handle and repo name: not set (also needed for any og:url/canonical)
