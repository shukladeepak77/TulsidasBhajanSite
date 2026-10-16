# Tulsidas Bhajan

A single-page collection of devotional bhajans by Goswami Tulsidas
(c. 1532–1623), author of the Ramcharitmanas. Part of the same family of
sites as Aarti Sangrah, Stotra Sangrah, and Meera Bhajan, linked from
astrojyotisha.com's Sanatan Wisdom page.

Scoped deliberately to Tulsidas's OTHER devotional works — Vinay Patrika,
Kavitavali, and the Bajrang Baan — rather than Ramcharitmanas or the
Hanuman Chalisa, which already have their own dedicated sites elsewhere in
this family. See `CONTENT.md` for sourcing details and verification notes.

## Stack

Next.js, static export (`output: "export"`), Tailwind v4. Same
architecture as the sibling Aarti/Meera Bhajan sites: a single
`src/content/bhajans.ts` file, no build-time content generation, no
backend.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Netlify, connected to this GitHub repo. `netlify.toml` sets the build
command (`npm run build`) and publish directory (`out`).
