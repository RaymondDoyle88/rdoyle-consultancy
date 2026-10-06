#!/bin/bash
# One-off setup, run ON KRYSTAL. Safe to run again: it skips anything already done.
#
#   1. Backs up what's live in public_html/rdoyle now (leaving out thedeepend/)
#   2. Installs the pull script as ~/bin/rdoyle-pull.sh
#   3. Adds the 15-minute cron job
#   4. Does the first deploy straight away
#
# The repo is public, so the server reads it over HTTPS with no key needed.

set -euo pipefail

REPO="$HOME/repos/rdoyle-consultancy"
URL="https://github.com/RaymondDoyle88/rdoyle-consultancy.git"
LIVE="$HOME/public_html/rdoyle"

echo "== 1. Repo"
mkdir -p "$HOME/repos"
if [[ -d "$REPO/.git" ]]; then
  git -C "$REPO" remote set-url origin "$URL"
  git -C "$REPO" fetch -q origin main && git -C "$REPO" reset -q --hard origin/main
  echo "   Already cloned, updated to the latest."
else
  git clone -q "$URL" "$REPO"
  echo "   Cloned."
fi

echo "== 2. Backup of the current live site"
[[ -d "$LIVE" ]] || { echo "   Stopped: $LIVE doesn't exist. Check the folder name in cPanel."; exit 1; }
mkdir -p "$HOME/backups"
BACKUP="$HOME/backups/rdoyle-before-github-$(date +%Y%m%d-%H%M%S).tar.gz"
tar -czf "$BACKUP" -C "$LIVE" --exclude=./thedeepend --exclude=./error_log .
echo "   Saved to $BACKUP"

echo "== 3. Pull script"
mkdir -p "$HOME/bin" "$HOME/logs"
cp "$REPO/deploy/server-pull.sh" "$HOME/bin/rdoyle-pull.sh"
chmod 700 "$HOME/bin/rdoyle-pull.sh"
echo "   Installed ~/bin/rdoyle-pull.sh"

echo "== 4. Cron (every 15 minutes)"
LINE="*/15 * * * * $HOME/bin/rdoyle-pull.sh"
if crontab -l 2>/dev/null | grep -qF "$HOME/bin/rdoyle-pull.sh"; then
  echo "   Already scheduled."
else
  { crontab -l 2>/dev/null || true; echo "$LINE"; } | crontab -
  echo "   Added: $LINE"
fi

echo "== 5. First deploy"
"$HOME/bin/rdoyle-pull.sh" --force
tail -n 1 "$HOME/logs/rdoyle-pull.log"
echo
echo "Done. Open https://www.rdoyle.info/ (a hard refresh may be needed: Cmd+Shift+R)."
echo "Check The Deep End still works too: https://www.rdoyle.info/thedeepend/"
