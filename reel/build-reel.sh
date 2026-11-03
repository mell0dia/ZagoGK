#!/bin/bash
# Rebuild the hero reel from album sources. Format: "<file> <in-seconds>" (6 s per cut = contact-4 .. contact+2)
set -e; SRC=${SRC:-/workspace/vids}; OUT=$(cd "$(dirname "$0")" && pwd); T=$(mktemp -d)
VF="scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=30,setsar=1,format=yuv420p,unsharp=5:5:0.6"
i=0; for spec in "n005 1.98" "n012 0.55" "n002 0.45" "n011 2.10" "n008 0.73"; do set -- $spec; i=$((i+1))
 ffmpeg -v error -y -ss $2 -i $SRC/$1.mp4 -t 6 -an -vf "$VF" -c:v libx264 -crf 18 -preset fast $T/seg$i.mp4; echo "file $T/seg$i.mp4" >> $T/list.txt; done
ffmpeg -v error -y -f concat -safe 0 -i $T/list.txt -an -vf "fade=in:0:12,fade=out:st=29.6:d=0.4" -c:v libx264 -profile:v high -crf 23 -preset slow -movflags +faststart -pix_fmt yuv420p $OUT/hero-reel-720p.mp4
ffmpeg -v error -y -i $OUT/hero-reel-720p.mp4 -vf scale=960:-2 -c:v libx264 -crf 28 -preset slow -an -movflags +faststart $OUT/hero-loop.mp4
ffmpeg -v error -y -ss 28.0 -i $OUT/hero-reel-720p.mp4 -frames:v 1 -q:v 3 $OUT/poster.jpg
