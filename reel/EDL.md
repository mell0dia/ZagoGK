# Hero Save Reel: Edit Decision List (draft)

Output: `reel/hero-reel-720p.mp4` (1280x720, H.264, 30 fps, muted, +faststart, 29.93 s, ~11.7 MB)
Autoplay loop version: `reel/hero-loop.mp4` (960x540, ~3.6 MB). Poster: `reel/poster.jpg` (reel 28.0 s, the n008 flying save at contact).

Rule (owner): each cut runs 4.0 s before the contact moment to 2.0 s after it (6.0 s per cut). Hard cuts; 0.4 s fade-in at the start and fade-out at the end.
Contact = the frame where the keeper's hands or body first touch the ball, found from frames at 12–30 fps.
Sources were center-cropped to 16:9 to fill the frame, then lightly sharpened.

| # | Reel time | Album n | Date | Source in | Contact | Source out | What happens | Confidence |
|---|-----------|---------|------|-----------|---------|------------|--------------|------------|
| 1 | 0:00–0:06 | 5  | 2026-06-06 | 1.98 s | **5.98 s** | 7.98 s | Teal kit. High shot under the bar; leaps with both arms up and gets hands to it at the crossbar, then falls to the ground. | Medium-high: arms reach the ball at ~5.98, but I can't tell if it was tipped over or caught |
| 2 | 0:06–0:12 | 12 | 2026-06-21 | 0.55 s | **4.55 s** | 6.55 s | Green kit. 1v1: drops at the attacker's feet, blocks, and gathers the ball into his chest (~4.65–4.75). | High |
| 3 | 0:12–0:18 | 2  | 2026-10-24 | 0.45 s | **4.45 s** | 6.45 s | Purple kit. Full-stretch dive to his right on a high shot; the ball deflects up off his hand (~4.40–4.55). | Medium: low-res source (674x376). The ball ends up near or behind the goal after, so the owner should confirm this wasn't a goal |
| 4 | 0:18–0:24 | 11 | 2026-02-16 | 2.10 s | **6.10 s** | 8.10 s | Green kit. Low dive to his left by the near post. | Medium: low-res, backlit, and the camera pans; contact ±0.1 s |
| 5 | 0:24–0:30 | 8  | 2026-05-04 | 0.73 s | **4.73 s** | 6.73 s | Green kit. Flying save, fully airborne, hand to the ball at the top corner (~4.73), lands ~5.3. The best moment, so it closes the reel. | High for the dive, medium for the outcome |

Note: the camera zooms/reframes in n008 at ~4.3 s (inside cut 5).

## Candidates considered but not used
- n015 (2025-09-27, vertical): sweeper-keeper sliding block at ~1.85 s. Only 1.85 s of footage before contact, so it can't take a 4 s pre-roll.
- n018 (2025-10-12): smother at the near post at ~0.0–0.5 s; he's holding the ball by ~2.7 s. The save happens at the very start of the clip, so there's no pre-roll.
- n003 (2025-10-25): goalmouth scramble with a high ball at ~3.6–4.2 s; the keeper is too small in frame to be sure.
- n013 (2026-06-21): goalmouth scramble at ~1.0–2.5 s; far away and unclear.
- n004, n006, n007, n009, n014, n016: general play, no clear keeper action found at 2 fps.
- n010 (2025-09-05): juggling, used for the Ball Control section instead.

## To refine
Change the in/out times in `build-reel.sh` and run it again. It needs the source mp4s at /workspace/vids/nNNN.mp4.
