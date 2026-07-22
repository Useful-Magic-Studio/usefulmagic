# Useful Magic Studio Website Agent Contract

## Purpose

This repository is the production marketing website for Useful Magic Studio. Make small, reviewable changes that preserve brand trust, accessibility, privacy, measurement integrity, and release safety.

## Current stack

- Next.js App Router, React, and TypeScript
- Tailwind CSS and shared UI components
- Vercel deployment
- PostHog, Vercel Analytics, and Sentry
- npm with the committed `package-lock.json`

## Working agreement

1. Read the relevant route, components, utilities, and applicable `.cursor/rules/*.mdc` files before editing.
2. For non-trivial work, first state the intended outcome, smallest file-level plan, risks, and verification steps.
3. Reuse existing components, utilities, and semantic theme variables before creating new abstractions.
4. Keep changes within the requested boundary. Separate broad refactors from feature or content work.
5. Treat approved copy, claims, analytics events, consent behavior, public URLs, and privacy language as contracts.
6. Stop and request approval before adding dependencies or services, changing a shared component API, changing tracked data, weakening a quality check, or taking a production action.

## Commands

Use npm only.

```bash
npm ci
npm run dev
npm run lint
npm run build
```

Run the checks relevant to the change. Do not claim a check passed unless it was actually run. Do not suppress errors, delete tests, or weaken configuration to obtain a green result.

## Non-negotiable boundaries

- Never commit secrets, tokens, personal data, or `.env*` values.
- Do not deploy, merge, change production configuration, or alter branch protection without explicit approval.
- Do not invent marketing claims, client proof, legal language, or processor details.
- Do not send form, email, or other personal values to analytics.
- Optional analytics and replay must remain disabled until the applicable consent state permits them.
- Preserve semantic HTML, keyboard access, visible focus, reduced-motion behavior, and usable responsive layouts.
- Do not introduce arbitrary colors or layout values when an existing semantic token or shared pattern applies.

## Completion report

End implementation work with:

- outcome and scope;
- files changed and why;
- commands run and exact results;
- accessibility, privacy, analytics, SEO, and performance impact where relevant;
- assumptions, unresolved risks, and manual review still required.

## Project references

- Architecture: https://www.notion.so/3a51f790e5a381e4813ae95eff048218
- Engineering dashboard: https://www.notion.so/3a51f790e5a381d9bb4ddcaf355a9689
