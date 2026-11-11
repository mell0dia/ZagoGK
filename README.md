# Zago Mello: goalkeeper site (LOCAL DRAFT, not published)
Plain static HTML/CSS/JS with relative paths and no build step, so it works on GitHub Pages as-is (`.nojekyll` included).
Preview: `python3 -m http.server 8080` in this folder, then open http://localhost:8080/

- `index.html`: Hero · Save Reel · Ball Control · Profile · Soccer Cards · GK Lessons (one-on-one, ages 7–10, $30/hr, book by email to rico.duoba@gmail.com). `gallery.html` (4 photos) and `cards.html` (4 soccer cards): linked from the menu only. `library.html`: Save Library.
- `library.html` + `data/videos.json`: Save Library, YouTube embeds only. Fill in `youtubeId` and the card switches from "Coming soon" to the player.
- `reel/`: hero reel, loop, poster, EDL.md, build-reel.sh
- `screenshots/`: preview only; you can leave this out of the repo.

GitHub Pages: keep each file under 50 MB (GitHub warns above 50 MB and blocks above 100 MB). Sites have a soft 1 GB limit, so put full-length videos on YouTube rather than in the repo.

## Still open
GitHub handle and repo name (for publishing / og:url). Lesson location and schedule are not shown yet.
