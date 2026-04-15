# GEMINI.md

Read `/Users/vishal/Projects/products/portfolio/AGENTS.md` first. It is the canonical repository contract.

## Project
This repo is Vishal Sharma's Astro-based portfolio implementation at `/Users/vishal/Projects/products/portfolio`.

Canonical planning and project memory live in:

- `/Users/vishal/Projects/systems/superpaper/superpaper/projects/portfolio_maintainer`

Start each session by loading:

1. `/Users/vishal/Projects/products/portfolio/AGENTS.md`
2. `/Users/vishal/Projects/systems/superpaper/superpaper/projects/portfolio_maintainer/portfolio_maintainer_project_hub.md`
3. `/Users/vishal/Projects/systems/superpaper/superpaper/projects/portfolio_maintainer/portfolio_repo_baseline.md`
4. `/Users/vishal/Projects/systems/superpaper/superpaper/projects/portfolio_maintainer/portfolio_agent_operating_contract.md`
5. `/Users/vishal/Projects/systems/superpaper/superpaper/projects/portfolio_maintainer/chat/2026-03-17_chat_log_portfolio_maintainer_bootstrap.md`
6. `/Users/vishal/Projects/systems/superpaper/superpaper/projects/portfolio_maintainer/chat/2026-04-14_chat_log_portfolio_agent_reinit.md`

## Commands
Run from repo root:

```bash
pnpm dev
pnpm build
pnpm preview
pnpm lint
pnpm lint:fix
pnpm format
```

## Working Rules
- Follow `AGENTS.md` for repo structure, execution policy, validation policy, and repo-to-Superpaper contract.
- Keep edits aligned with the current stack: Astro 6, Tailwind, React 19 islands where needed, Biome, Remotion-generated assets, and `src/config.ts`-driven content.
- Prefer updating Superpaper notes in the same session when repo behavior or maintainer conventions change.
