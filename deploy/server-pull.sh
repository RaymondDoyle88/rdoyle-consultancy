#!/bin/bash
# Runs ON KRYSTAL every 15 minutes (cron). Fetches the GitHub repo and, when
# there's a commit it hasn't deployed yet, copies the website files into
# rdoyle.info's live folder. Silent when there's nothing new (cron emails any output).
#
# Installed copy: ~/bin/rdoyle-pull.sh on the server. It is deliberately a copy,
# so a change pushed to GitHub can't change what the server runs.
# Log: ~/logs/rdoyle-pull.log on the server.
#   Run by hand:  ~/bin/rdoyle-pull.sh --force
#
# IMPORTANT: public_html/rdoyle also holds other sites (thedeepend/ and anything
# else you add). This script only ever ADDS or UPDATES the files listed below.
# It never deletes anything in the live folder, so those other sites are safe.

set -uo pipefail

REPO="$HOME/repos/rdoyle-consultancy"
LIVE="$HOME/public_html/rdoyle"
DEPLOYED="$HOME/repos/.rdoyle-consultancy-deployed"   # last commit that went live
LOG="$HOME/logs/rdoyle-pull.log"

mkdir -p "$(dirname "$LOG")"
log() { echo "$(date '+%Y-%m-%d %H:%M:%S')  $*" >> "$LOG"; }
if [[ -f "$LOG" ]] && (( $(wc -l < "$LOG") > 1000 )); then
  tail -n 1000 "$LOG" > "$LOG.tmp" && mv "$LOG.tmp" "$LOG"
fi

cd "$REPO" 2>/dev/null || { log "FAILED: $REPO is missing."; exit 1; }
git fetch -q origin main 2>>"$LOG" || { log "FAILED: couldn't fetch from GitHub."; exit 1; }
LATEST=$(git rev-parse origin/main)
LAST=$(cat "$DEPLOYED" 2>/dev/null || true)
if [[ "$LATEST" == "$LAST" && "${1:-}" != "--force" ]]; then
  exit 0   # nothing new
fi
SHORT=${LATEST:0:7}
git reset -q --hard origin/main

# Only sensible content goes live. On failure nothing is marked as deployed,
# so the next run tries again (and logs again) until it's fixed.
[[ -d "$LIVE" ]] || { log "NOT DEPLOYED $SHORT: $LIVE doesn't exist."; exit 1; }
[[ -s index.html ]] || { log "NOT DEPLOYED $SHORT: index.html is missing or empty."; exit 1; }
grep -q '</html>' index.html || { log "NOT DEPLOYED $SHORT: index.html looks cut off."; exit 1; }

# Gather exactly the website files. Nothing else in the repo (README, CLAUDE.md,
# deploy/) ever reaches the web folder.
STAGE=$(mktemp -d)
trap 'rm -rf "$STAGE"' EXIT
mkdir -p "$STAGE/assets"
cp index.html "$STAGE/"
cp favicon.ico favicon.svg favicon-32.png apple-touch-icon.png "$STAGE/" 2>/dev/null || true
cp assets/* "$STAGE/assets/"
chmod -R u=rwX,go=rX "$STAGE"

# No --delete: see the IMPORTANT note at the top.
if rsync -rtp "$STAGE/" "$LIVE/" 2>>"$LOG"; then
  echo "$LATEST" > "$DEPLOYED"
  log "DEPLOYED $SHORT: $(git log -1 --format=%s)"
else
  log "FAILED $SHORT: copying into the live folder didn't complete."; exit 1
fi
