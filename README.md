# Obsidian Web Study

A Next.js reconstruction study built from five supplied HTML reference captures: home, download, pricing, sync, and publish.

## Routes

- `/` — home
- `/download` — platform download landing page
- `/pricing` — core, sync, and publish plan presentation
- `/sync` — synchronization product page
- `/publish` — publishing product page

## Architecture

The raw reference captures remain unchanged under `v0/`. The implementation lives under `src/` and uses a shared site shell and reusable marketing-page component so common navigation, visual language, layout, cards, calls-to-action, and responsive behavior are maintained once.

## Development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run build
```

This repository is an independent learning/prototyping reconstruction and is not the official Obsidian website.
