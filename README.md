# Faizan AI Portfolio

Premium, dark-first AI engineering portfolio built with **Next.js App Router, React, TypeScript, Framer Motion, GSAP-ready styling, React Three Fiber, and a small server API**.

## Features

- Interactive, drag-rotatable neural field with a lightweight mobile / reduced-motion fallback
- Responsive hero, SaaS engineering workspace, animated flow diagrams and project case-study modal
- 7 curated projects including SADA Voice AI, Muhawir, Lahja, offline NMT and private RAG
- AI playground with **4 functional tabs**: Ask My AI, RAG trace, agent execution simulation and browser speech demo
- Searchable public knowledge grounding for Ask My AI
- Optional server-side Groq Chat Completions with **streamed responses**. No browser-side secrets
- Live GitHub public repository metadata with a documented static fallback
- Optional working contact form powered by Resend, validation and basic rate-limiting
- Responsive mobile nav, keyboard navigation, reduced-motion preferences, light/dark setting
- Editable content in one file; SEO, social image, sitemap, robots and JSON-LD included

## Get started

Requirements: Node.js 20.11+ and npm. From this folder:

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. No API key is needed to explore the design and interactive simulations.

### Optional integrations

1. For real AI replies, add `GROQ_API_KEY` to `.env.local`. The chat endpoint sends only the user question and selected public portfolio text to Groq. Without a key, it clearly uses deterministic **portfolio content demo** replies. If Groq is unavailable, it automatically falls back to the labeled demo.
2. For real contact delivery, set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (a verified Resend sender) and `CONTACT_TO_EMAIL`. Without these, the form returns a clear configuration error and visitors can use the direct `mailto:` link. No false successful submissions.
3. Set `NEXT_PUBLIC_SITE_URL` to the deployed HTTPS URL for correct canonical/OG/sitemap metadata.
4. GitHub activity fetches public repository metadata from GitHub, with a curated repo fallback when GitHub is unavailable. No token required for normal traffic; production sites with high traffic should cache or use a server-side token.

## Edit portfolio content

Edit `content/portfolio.ts` to change availability, roles, projects, verified results, skills, contact links and architectural illustrations. Keep professional claims based on evidence. `public/Faizan_Ahmed_Khan_Resume.pdf` is the neutral resume download; replace it with your preferred up-to-date PDF as needed.

## Deployment

**Vercel:** Import the project or upload a Git repository. Framework: Next.js. Build: `npm run build`. Configure environment variables in Vercel settings. Redeploy. For SADA, the site links to the verified existing public demo; this portfolio does not embed confidential backend integrations.

**Other Node hosts:** `npm install && npm run build && npm start` with port 3000 and the same environment variables.

### Security and production hardening

- Real API provider keys are read only from server environment variables, never `NEXT_PUBLIC_*`.
- Contact endpoint validates lengths and email addresses, applies a honeypot, escapes HTML, and returns honest errors.
- Chat limits messages to 800 characters, retrieves only approved public entries, and constrains the model to the public facts supplied.
- A per-process in-memory rate limiter is included for a starter deployment; before significant public traffic, replace it with a **distributed Redis/KV limiter** to enforce limits across serverless instances and address IP spoofing at the trusted proxy boundary. Optional CAPTCHA/Turnstile can be added for contact abuse.
- Visitor chat data sent to a third-party model should be disclosed in your privacy notice if the live provider is enabled.
- All user-visible architecture and telemetry illustrations are labeled illustrative or simulation. No client names or proprietary files are shared.
- Avoid feeding confidential employer data into the public knowledge base.

## Quality checks

See [BUILD_STATUS.md](BUILD_STATUS.md) for the verification limits of this delivery. A full Next.js build requires dependency installation on a networked machine.


```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Structure

```text
app/                  Next.js pages, CSS, SEO and secure API routes
components/sections/  Main portfolio sections
components/visuals/   R3F neural sphere and project visual art
components/ui/        Reusable text and motion elements
content/portfolio.ts  Editable, approved professional data
lib/                  Retrieval and rate-limiting utilities
public/               Downloadable professional resume
tests/                Content and integration-structure tests
```

## Sources and integrity

Portfolio facts are curated from the candidate's shared resume and public GitHub project READMEs. The website does not claim that synthetic order data in SADA is a real customer system. Company AI systems are described at a high level with no private code repositories or false demo links.

### UI stack note

The visual system uses Tailwind utilities alongside extensive custom art-direction CSS. Radix Tabs (a shadcn/ui-compatible accessible primitive) power the playground navigation, and `components/ui/button.tsx` is a locally owned shadcn-style button primitive. GSAP ScrollTrigger is used for the architecture flow's entrance animation; Framer Motion handles section and UI transitions. The hero is rendered with React Three Fiber.
