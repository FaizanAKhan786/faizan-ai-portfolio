# Delivery verification and deployment readiness

**Implementation:** complete source implementation packaged for local use; this is **not a claimed live deployment**. External AI and email services require their own provider credentials and configuration.

## Checks completed in this environment

- Node built-in content / structure suite: **5 passed, 0 failed** (`npm test`).
- All 31 TypeScript and TSX files parse without syntax diagnostics using a TypeScript compiler AST parser.
- Main CSS stylesheet parses without top-level syntax errors.
- Resume PDF: **1 page A4**, successfully rendered and visually reviewed.
- Reviewed local static and repo links, retained only verified public repository/demo URLs.

## Checks not completed here

This environment cannot resolve `registry.npmjs.org`, and its npm package cache is incomplete. It therefore cannot install dependencies or run a full Next.js `build`, dependency-based TypeScript typecheck, or ESLint verification. The app has not been rendered in a browser or tested on a deployed host here. **Do not treat it as fully production-verified until those checks pass.**

On a machine or CI runner with npm registry access, run:

```sh
npm install
npm run typecheck
npm run lint
npm test
npm run build
npm run dev
```

A GitHub Actions workflow is included under `.github/workflows/checks.yml` to automate the verification when code is pushed to GitHub.

## Before public launch

- Add `NEXT_PUBLIC_SITE_URL` for correct canonical URLs and sharing previews.
- Configure `GROQ_API_KEY` for server-side AI responses, or leave the explicit portfolio simulation.
- Configure Resend sender and destination environment variables before enabling real contact form delivery. The direct email CTA works without Resend.
- Review every professional claim and update `content/portfolio.ts` as details change.
- Replace in-memory rate limiting with a distributed limiter and add anti-abuse protection if traffic increases.
- Add an AI provider privacy notice if real chat is enabled.
