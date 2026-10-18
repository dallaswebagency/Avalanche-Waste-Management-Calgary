# Avalanche Waste Management - redesign handoff

Static site (HTML/CSS/JS, no build step). URLs preserve the old structure:
/, /about/, /commercial-services/, /residential-services/, /rentals/ (bin anchors #40-yard-bins etc.),
/portable-toilets-calgary/, /calgary-temporary-fencing/, /contact/, /booking/, /contractor/

## Needs confirming before launch
1. 30 yard bin: old site shows "$275 + disposal" next to a $350 total. Site shows "$275 + disposal" only.
2. 40 yard bin: old site shows two sets of dimensions (21' x 7.5' x 7' and 16' x 8' x 6'). Site uses 21' x 7.5' x 7'.
3. Disposal fees were "TBD" on every bin. No weight limits or rental length are stated on the old site, so none are shown.
   "7 days then $8 per day" is taken from the old rentals page.
4. Portable toilet and fencing prices are not published on the old site. Pages say "by quote".
5. Phone, email and address match the old contact page. Hours are not listed anywhere, so none are shown.

## Images
Photos and award badges are hot-linked from the old site (bmb.bdi.mybluehost.me / avalanchewm.com) because they could not be
downloaded from the build environment. Download them into /assets/img and update paths (see IMG dict in build script)
before the old site is retired. The logo is the original file, bundled in /assets/logo.png (239x61 px; a larger copy
would look sharper on high-density screens).

## Forms
The contact, booking, contractor and inquiry forms keep the original fields and required markers, but there is no server
endpoint yet. They open the visitor's email app with the details pre-filled to info@avalanchewm.com.
Connect a form service (or the existing WordPress form handler) to replace this.

## Content rules followed
No invented prices, awards, testimonials or service areas. Only testimonial: Chris Levesque, Levesque Roofing Inc.
Service area is "Calgary and the surrounding area" (no towns listed on the old site).
