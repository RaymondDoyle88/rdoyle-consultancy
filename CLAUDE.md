# RDoyle Consultancy website (www.rdoyle.info)

One-page marketing site for Raymond Doyle's business: websites and IT support for small businesses and home workers across West Lothian and the Falkirk area.

## Rules

- Plain static files only: `index.html` plus `assets/` and the favicons. No framework, no build step.
- UK English. No em dashes in any copy. Copy should read as if a person wrote it.
- Contact details (real, use verbatim): 07845 344 846, `tel:+447845344846`, `https://wa.me/447845344846`.
- WhatsApp buttons use the official green `#25D366` with dark text `#0b141a` (white on that green is hard to read).
- Service area is West Lothian and the Falkirk area. Business analysis is deliberately not offered on the site.

## Look

- Dark theme. Background `#141518`, panels `#1c1e22`, borders `#2a2d33`, text `#f2f3f5`, muted text `#a3a7b0`, accent cyan `#59c8e6`.
- Headings and UI in Space Grotesk; body text in system-ui.
- Logo: the line "rd" mark in `assets/logo.svg` (white r forming the left of a cyan d's bowl), followed by the name in Jost: "rdoyle" (400, white) "consultancy" (300, `#8b8b93`), baseline-aligned with the mark.

## Deploying

Push to `main`. Krystal pulls every 15 minutes (see README.md). The server script never deletes files in `public_html/rdoyle`, because The Deep End lives in `public_html/rdoyle/thedeepend/`. If you add a new top-level file or folder to the site, add it to the copy list in `deploy/server-pull.sh` and reinstall that script on the server.
