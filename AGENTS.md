# Portfolio Maintainer Agent Guide

## Purpose
This repository (`/Users/vishal/Projects/products/portfolio`) is the implementation repo for Vishal Sharma's public portfolio and personal web surface.

The product memory, planning history, and durable maintainer decisions for this repo live in the separate Superpaper vault repo.

## External Docs Source (Canonical)
Use this folder as the canonical planning and project-memory surface:

- `/Users/vishal/Projects/systems/superpaper/superpaper/projects/portfolio_maintainer`

Also load protocol context from:

- `/Users/vishal/Projects/systems/superpaper/AGENTS.md`

## Required Startup Context
When a new agent session starts in this repo, read these notes first:

1. `/Users/vishal/Projects/systems/superpaper/superpaper/projects/portfolio_maintainer/portfolio_maintainer_project_hub.md`
2. `/Users/vishal/Projects/systems/superpaper/superpaper/projects/portfolio_maintainer/portfolio_repo_baseline.md`
3. `/Users/vishal/Projects/systems/superpaper/superpaper/projects/portfolio_maintainer/portfolio_agent_operating_contract.md`
4. `/Users/vishal/Projects/systems/superpaper/superpaper/projects/portfolio_maintainer/chat/2026-03-17_chat_log_portfolio_maintainer_bootstrap.md`
5. `/Users/vishal/Projects/systems/superpaper/superpaper/projects/portfolio_maintainer/chat/2026-04-14_chat_log_portfolio_agent_reinit.md`

## Repo Structure
- `src/pages/`: Astro routes for home, about, projects, blog, and dynamic project/blog detail pages.
- `src/components/`: site sections and shared UI pieces; interactive UI is split into React/TSX components and `components/ui/`.
- `src/layouts/`: page chrome and shared shell, currently centered on `Layout.astro`.
- `src/config.ts`: portfolio identity, nav, social links, page copy, and project entries.
- `src/content/posts/` + `src/content.config.ts`: blog content collection and schema.
- `src/styles/`: global styling and theme-level CSS.
- `public/`: static images, icons, and font assets.

## Repo <-> Superpaper Contract
- Implementation truth lives in this repo.
- Planning, maintainer decisions, project memory, and session history live in Superpaper.
- If repo behavior, structure, or workflow changes materially, update the linked Superpaper notes in the same session.
- If repo code and Superpaper docs diverge, flag the conflict and prefer bringing docs back into sync rather than silently drifting.

## Execution Policy
- Default to documentation, code, and config edits.
- Run only the smallest validation needed for the requested change.
- Avoid long-running dev servers unless the user explicitly asks for them.
- Do not introduce broad toolchain churn or dependency swaps unless the task requires it.

## Validation Policy
- Prefer repo-native validation:
  - `pnpm build`
  - `pnpm lint`
- For docs-only changes, verify path correctness, command correctness, and cross-file consistency instead of running the app.
- If validation is skipped, record that explicitly in the handoff.

## Frontend Direction
- Preserve the current Astro + Tailwind + React hybrid structure.
- Keep motion intentional and lightweight; the repo already uses `framer-motion` and transition helpers, so prefer extending that system rather than mixing in unrelated animation stacks.
- Maintain the repo's current visual language: modern typography, gradient accents, glass surfaces, and polished interactions.
- Avoid generic template content. Content and examples should reflect Vishal's real projects, writing, and public persona.
- Prefer static-first Astro patterns; only hydrate React islands when interaction actually requires it.

## Content Rules
- Portfolio metadata belongs in `src/config.ts` unless a stronger content-system move is explicitly requested.
- Blog posts must conform to the `posts` collection schema in `src/content.config.ts`.
- New static assets should go in `public/` unless they need Astro asset-pipeline behavior.

## Documentation Workflow
- Keep repo-local agent docs thin and aligned: `AGENTS.md` is canonical for repository policy, while agent-specific adapters should point back here.
- Update this file when repo structure, startup context, validation commands, or operating rules change.
- Update the linked Superpaper notes when the repo gains new architecture decisions, workflow constraints, or maintainer conventions.
