# Where the content comes from

This is a single-page site: `src/content/bhajans.ts` is a hand-written
TypeScript file holding all bhajans (no build-time content-generation
script, unlike the sibling Bhagwad Gita / Ashtavakra Gita sites), following
the same single-page pattern as the sibling Aarti Sangrah / Meera Bhajan
sites.

Verse text only — no meaning/translation, matching the rest of this family
of sites. All 7 compositions here are by Goswami Tulsidas (c. 1532–1623),
author of the Ramcharitmanas — public domain devotional poetry, author
deceased roughly 400 years ago.

Deliberately scoped to his OTHER devotional works — Vinay Patrika (his
279-hymn collection), Kavitavali, and the Bajrang Baan — rather than
Ramcharitmanas itself or the Hanuman Chalisa, both of which already have
their own dedicated sites elsewhere in this family (Ramcharitmanas Katha,
and Hanuman Chalisa inside Aarti Sangrah's own content). This avoids
duplicating what's already published and adds genuinely distinct content.
An earlier version included "जो सुमिरत सिधि होइ", which turned out on
closer check to be a sortha FROM Ramcharitmanas's own Bal Kand opening
(not a separate Vinay Patrika pada) — removed per explicit request, since
it duplicated Ramcharitmanas Katha's content rather than adding to it.
"माँगत तुलसीदास कर जोरे" was similarly folded into "गाइये गणपति जगवंदन"
once it became clear it's that pada's own closing couplet, not a
standalone composition — keeping both separately would have been an
internal duplicate on this site's own content.

Every title was individually web-search-verified before inclusion (exact
line matches against hindwi.org, kavitakosh.org, bharatdiscovery.org,
sanskritdocuments.org) rather than transcribed from memory. Several are
presented as the commonly-sung OPENING of a longer composition rather than
the complete pada — Vinay Patrika's padas and the Bajrang Baan in
particular run much longer in their full form; what's here is the
confidently-verified core, not a fabricated completion of text that
couldn't be verified line-by-line.

## Adding a new bhajan

1. Add a new entry to the `bhajans` array in `src/content/bhajans.ts`
   (`slug`, `title`, `subtitle`, `verses`).
2. The home page (`src/app/page.tsx`) renders every entry in that array
   automatically — no other file needs to change.

## Audio

Not included, matching the rest of this family of sites.
