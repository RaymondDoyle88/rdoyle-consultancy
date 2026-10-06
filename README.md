# RDoyle Consultancy website

The site at **www.rdoyle.info**. Plain HTML and CSS, no build step.

| What | Where |
|---|---|
| The page | `index.html` |
| Photo, logo, work screenshots | `assets/` |
| Browser tab icons | `favicon.ico`, `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` |
| How it gets to Krystal | `deploy/` |

## How updates reach the site (GitHub is the one true copy)

Krystal checks this repo every 15 minutes and copies any new commit on `main` into `public_html/rdoyle`, so your Mac doesn't need to be on.

- **Quick edit on github.com** (any device): open `index.html`, press the pencil, edit, then "Commit changes". Live within 15 minutes.
- **On the Mac:** edit, commit and `git push`. Live within 15 minutes.
- **Want it live now?** ssh in and run `~/bin/rdoyle-pull.sh --force`.

Only the files above are ever copied. `README.md`, `CLAUDE.md` and `deploy/` never reach the web folder.

The deploy only adds and updates files. It never deletes anything in `public_html/rdoyle`, so The Deep End (`thedeepend/`) and anything else in there is left alone. If you remove or rename a file here, delete the old copy on the server yourself in cPanel's File Manager.

## On the server

ssh in the same way as for The Deep End (key `~/.ssh/krystal_thedeepend`, port 722):

```
ssh -p 722 -i ~/.ssh/krystal_thedeepend shwt8yk63in5@cruitme.com
```

- Log: `~/logs/rdoyle-pull.log` (a line only when something is deployed or goes wrong)
- Deploy now: `~/bin/rdoyle-pull.sh --force`
- The script is a copy of `deploy/server-pull.sh`. After changing that file, copy it to the server again (or rerun `deploy/setup-server.sh`).
- Schedule: `crontab -l`
- Backup of the old site from before this was set up: `~/backups/`

## First-time setup (once only)

See `deploy/setup-server.sh`. From Terminal on the Mac:

```
ssh -p 722 -i ~/.ssh/krystal_thedeepend shwt8yk63in5@cruitme.com \
  'git clone -q https://github.com/RaymondDoyle88/rdoyle-consultancy.git ~/repos/rdoyle-consultancy 2>/dev/null; bash ~/repos/rdoyle-consultancy/deploy/setup-server.sh'
```
